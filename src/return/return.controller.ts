import { Controller, Param, Post } from '@nestjs/common';
import { ReturnService } from './return.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Return/Pengembalian')
@Controller('return')
export class ReturnController {
    constructor(private returnService:ReturnService){}
    @Post(":borrowingId")
    async returnBook(@Param('borrowingId') borrowingId:string){
        return this.returnService.returnBook(borrowingId)
    }
}
