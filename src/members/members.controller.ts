import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FilterMemberDto } from './dto/filterMemberDto';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/createMemberDto';
import { UpdateMemberDto } from './dto/updateMemberDto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Members')
@Controller('members')
export class MembersController {
    constructor(private memberService:MembersService){}
    @Get()
    async findAll(@Query() filter:FilterMemberDto){
        return this.memberService.findAll(filter)
    }

    @Get(":id")
    async findOne(@Param('id') id:string){
        return this.memberService.findOneById(id)
    }
    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    @ApiBody({
       type: CreateMemberDto,
       description: 'Json structure for user object',
    })
    async create(@Body() createMemberDto:CreateMemberDto){
        return this.memberService.create(createMemberDto)
    }
    @Put(":id")
    async update(@Param('id') id:string,@Body() updateMemberDto:UpdateMemberDto){
        return this.memberService.update(id,updateMemberDto)
    }
    @Delete(":id")
    async delete(@Param('id') id:string){
        return this.memberService.delelte(id)
    }
}
