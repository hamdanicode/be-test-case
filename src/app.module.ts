import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { ConfigModule } from '@nestjs/config';
import { MembersModule } from './members/members.module';
import { BorrowingModule } from './borrowing/borrowing.module';


@Module({
  imports: [BooksModule,ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRoot(typeOrmConfig), MembersModule, BorrowingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
