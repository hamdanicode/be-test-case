import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entity/book.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Book])],
  exports:[BooksService],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
