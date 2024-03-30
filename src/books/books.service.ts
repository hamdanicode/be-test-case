import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entity/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/createBookDto';
import { UpdateBookDto } from './dto/updateBookDto';
import { FilterBookDto } from './dto/filterBookDto';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private readonly bookRepo:Repository<Book>){}

    async find(filterBookDto:FilterBookDto):Promise<Book[]>{
        // console.log(filterBookDto);
        return await this.bookRepo.find({where:filterBookDto})
    }
    async findById(id:string):Promise<Book>{
        return await this.bookRepo.findOne({where:{id:id}})
    }
    async create(createBookDto:CreateBookDto):Promise<void>{
        const {code,stock,author,title}=createBookDto
        try {
            const book=this.bookRepo.create()
            book.code=code
            book.title=title
            book.author=author
            book.stock=stock
            await book.save();
            
        } catch (err) {
            if (err.code === '23505') {
                throw new ConflictException(`Code ${code} already used.`)
            } else {
                throw new InternalServerErrorException(err);
            } 
        }
    }

    async update(id:string,updateBookDto:UpdateBookDto):Promise<void>{
        const {code,stock,author,title}=updateBookDto
        const book=await this.findById(id)
        if (!book) throw new BadRequestException(`Book with ID ${id} not found`)
        try {
            book.code=code
            book.title=title
            book.author=author
            book.stock=stock
            await book.save();
            
        } catch (err) {
            if (err.code === '23505') {
                throw new ConflictException(`Code ${code} already used.`)
            } else {
                throw new InternalServerErrorException(err);
            } 
        }
    }
    async delete(id:string):Promise<void>{
        const book=await this.findById(id)
        if (!book) throw new BadRequestException(`Book with ID ${id} not found`)
        await book.remove();
    }



}
