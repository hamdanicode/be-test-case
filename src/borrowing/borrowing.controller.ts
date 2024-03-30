import { Controller, Get, Param, Post } from '@nestjs/common';
import { BorrowingService } from './borrowing.service';

@Controller('borrowing')
export class BorrowingController {
    constructor(private bprrowingService:BorrowingService){}
    
    @Get()
    async find(){
        return this.bprrowingService.find()
    }
    @Get(":id")
    async findOne(@Param('id') id:string){
        return this.bprrowingService.findOneById(id)
    }

    @Get(":memeberId/borrowed")
    async borrowed(@Param(':memeberId') memeberId:string){
        return this.bprrowingService.borrowed(memeberId)
    }
    @Get(":memeberId/history")
    async borrowedHistory(@Param(':memeberId') memeberId:string){
        return this.bprrowingService.borrowedHistory(memeberId)
    }

    @Post(':memberId/:bookId')
    async create(@Param('memberId') memberId,@Param('bookId') bookId){
        return this.bprrowingService.create(memberId,bookId)       
    }
}
