import { Module } from '@nestjs/common';
import { ReturnController } from './return.controller';
import { ReturnService } from './return.service';
import { BorrowingModule } from 'src/borrowing/borrowing.module';

@Module({
  imports:[BorrowingModule],
  controllers: [ReturnController],
  providers: [ReturnService]
})
export class ReturnModule {}
