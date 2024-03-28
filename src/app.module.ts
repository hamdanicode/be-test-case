import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { ConfigModule } from '@nestjs/config';
import { MembersModule } from './members/members.module';


@Module({
  imports: [BooksModule,ConfigModule.forRoot({isGlobal:true}),TypeOrmModule.forRoot(typeOrmConfig), MembersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
