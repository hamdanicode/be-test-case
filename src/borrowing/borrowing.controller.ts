import { Controller, Get, Param, Post } from '@nestjs/common';
import { BorrowingService } from './borrowing.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Borrowing')
@Controller('borrowing')
export class BorrowingController {
    constructor(private bprrowingService:BorrowingService){}
    
    // @Get()
    // async find(){
    //     return this.bprrowingService.find()
    // }
    @Get(":id")
    async findOne(@Param('id') id:string){
        return this.bprrowingService.findOneById(id)
    }

    @Get(":memeberId/borrowed")
    async borrowed(@Param('memeberId') memeberId:string){
        return this.bprrowingService.borrowed(memeberId)
    }
    @Get(":memeberId/history")
    async borrowedHistory(@Param('memeberId') memeberId:string){
        return this.bprrowingService.borrowedHistory(memeberId)
    }

    @Post(':memberId/:bookId')
    @ApiResponse({ status: 201, description: 'The record has been successfully created'})
    @ApiResponse({ status: 400 , description: 'Cannot borrow books, because the limit has been reached/Cannot borrow books, {member.name} is on a penalty period'})
    async create(@Param('memberId') memberId:string,@Param('bookId') bookId:string){
        return this.bprrowingService.create(memberId,bookId)       
    }
}
