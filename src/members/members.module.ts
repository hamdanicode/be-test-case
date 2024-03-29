import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Member])],
  exports:[MembersService],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
