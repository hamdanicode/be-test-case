import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createBookDto';
import { UpdateBookDto } from './dto/updateBookDto';
import { FilterBookDto } from './dto/filterBookDto';

@Controller('books')
export class BooksController {

    constructor(private bookService:BooksService){}
    @Get()
    async findAll(@Query() filter:FilterBookDto){
        return this.bookService.find(filter)
    }

    @Get(":id")
    async findOne(@Param('id') id:string){
        return this.bookService.findById(id)
    }
    @Post()
    async create(@Body() createBookDto:CreateBookDto){
        return this.bookService.create(createBookDto)
    }
    @Put(":id")
    async update(@Param('id') id:string,@Body() updateBookDto:UpdateBookDto){
        return this.bookService.update(id,updateBookDto)
    }
    @Delete(":id")
    async delete(@Param('id') id:string){
        return this.bookService.delete(id)
    }
}
