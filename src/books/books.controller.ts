import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createBookDto';
import { UpdateBookDto } from './dto/updateBookDto';
import { FilterBookDto } from './dto/filterBookDto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Books')
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
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiBody({
       type: CreateBookDto,
       description: 'Json structure for user object',
    })
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
