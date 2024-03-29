import { Controller, Param, Post } from '@nestjs/common';
import { BorrowingService } from './borrowing.service';

@Controller('borrowing')
export class BorrowingController {
    constructor(private bprrowingService:BorrowingService){}
    
    // create /member id/book id
    @Post(':memberId/:bookId')
    async create(@Param('memberId') memberId,@Param('bookId') bookId){
        return this.bprrowingService.create(memberId,bookId)       
    }
}
