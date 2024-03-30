import { Module } from '@nestjs/common';
import { BorrowingController } from './borrowing.controller';
import { BorrowingService } from './borrowing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Borrowing } from './entity/borrowing.entity';
import { BooksModule } from 'src/books/books.module';
import { MembersModule } from 'src/members/members.module';

@Module({
  imports:[TypeOrmModule.forFeature([Borrowing]),BooksModule,MembersModule],
  exports:[BorrowingService],
  controllers: [BorrowingController],
  providers: [BorrowingService]
})
export class BorrowingModule {}
