import { BadRequestException, Injectable } from '@nestjs/common';
import { BorrowingService } from 'src/borrowing/borrowing.service';

@Injectable()
export class ReturnService {
    constructor(private readonly browingService:BorrowingService){}

    async returnBook(borrowingId:string):Promise<void>{
        const borowing=await this.browingService.findOneById(borrowingId);

        if(!borowing)  throw new BadRequestException(`Borrowing with ID ${borrowingId} not found`)
        if(borowing.returnsAt!=null)  throw new BadRequestException(`Loan with ID ${borrowingId} has been returned`)
        
        const today= new Date()
        // update date pengembalian
        borowing.returnsAt=today
        await borowing.save()
        // cek apakah pengembalian penalty
        if(await borowing.isRetunPenalty()){
            // update tanggal penalty
            borowing.member.penaltyAt=borowing.returnsAt
        }
        // kurangi jumlah peminjaman
        borowing.member.borrowed-=1;
        await borowing.member.save()
        // add stok book
        borowing.book.stock+=1;
        await borowing.book.save()
    }


}
