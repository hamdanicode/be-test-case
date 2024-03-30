import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Borrowing } from './entity/borrowing.entity';
import { Repository } from 'typeorm';
import { BooksService } from 'src/books/books.service';
import { MembersService } from 'src/members/members.service';
import { Member } from 'src/members/entity/member.entity';

@Injectable()
export class BorrowingService {
    constructor(
        @InjectRepository(Borrowing) private readonly borrowingRepo: Repository<Borrowing>,
        private readonly bookService: BooksService,
        private readonly memberService: MembersService,
    ) { }


    async borrowed(memberId:string):Promise<Member>{
        // console.log("borrowing service",memberId);
        
        const member=await this.memberService.borrowedBook(memberId);
        return member
    }

    async borrowedHistory(memberId:string):Promise<Member>{
        const member=await this.memberService.borrowedHistory(memberId);
        return member
    }

    async find():Promise<Borrowing[]>{
        return this.borrowingRepo.find({where:{},relations:['member']})
    }   

    async create(memberId: string, bookId: string): Promise<void> {
        const member = await this.memberService.findOneById(memberId)
        if (!member) throw new BadRequestException(`Member with ID ${memberId} not found`)
        
        const book = await this.bookService.findById(bookId)
        if (!book) throw new BadRequestException(`Book with ID ${bookId} not found`)
        
        // check limit yang sudah di pinjam
        if (!await  member.canBorrow()) throw new BadRequestException(`Cannot borrow books, because the limit has been reached`);
        // check penalty
        if (await  member.isPenalty()) throw new BadRequestException(`Cannot borrow books, ${member.name} is on a penalty period`);
        
        try {
            const borrowing = this.borrowingRepo.create()
            borrowing.member=member
            borrowing.book=book
            await borrowing.save();

            // tambah count peminjaman
            member.borrowed+=1;
            await member.save();
            // kurangi stok
            book.stock-=1;
            await book.save();
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
        
    }
    async findOneById(id:string):Promise<Borrowing>{
        return await this.borrowingRepo.findOne({where:{id:id},relations:['member','book']})
    }
}
