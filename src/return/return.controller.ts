import { Controller, Param, Put } from '@nestjs/common';
import { ReturnService } from './return.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Return')
@Controller('return')
export class ReturnController {
    constructor(private returnService:ReturnService){}
    @Put(":borrowingId")
    @ApiResponse({ status: 200, description: 'The record has been successfully return'})
    @ApiResponse({ status: 400 , description: 'Loan with ID {uuid} has been returned/ Borrowing with ID ${borrowingId} not found'})
    async returnBook(@Param('borrowingId') borrowingId:string){
        return this.returnService.returnBook(borrowingId)
    }
}
