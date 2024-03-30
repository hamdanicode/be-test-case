import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FilterMemberDto } from './dto/filterMemberDto';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/createMemberDto';
import { UpdateMemberDto } from './dto/updateMemberDto';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
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
    @ApiResponse({ status: 409 , description: 'Code {code} already used'})
    @ApiResponse({ status: 400 , description: 'Bad Request'})
    @ApiBody({
       type: CreateMemberDto,
       description: 'Json structure for user object',
    })
    async create(@Body() createMemberDto:CreateMemberDto){
        return this.memberService.create(createMemberDto)
    }

    @Put(":id")
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 409 , description: 'Code {code} already used'})
    @ApiResponse({ status: 400 , description: 'Bad Request'})
    async update(@Param('id') id:string,@Body() updateMemberDto:UpdateMemberDto){
        return this.memberService.update(id,updateMemberDto)
    }

    @Delete(":id")
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    @ApiResponse({ status: 400, description: 'Member with ID {id} not found'})
    async delete(@Param('id') id:string){
        return this.memberService.delelte(id)
    }
}
