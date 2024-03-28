import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entity/member.entity';
import { Repository } from 'typeorm';
import { FilterMemberDto } from './dto/filterMemberDto';
import { CreateMemberDto } from './dto/createMemberDto';
import { UpdateMemberDto } from './dto/updateMemberDto';

@Injectable()
export class MembersService {
    constructor(@InjectRepository(Member) private readonly memberRepo: Repository<Member>) { }

    async findAll(filterMemberDto: FilterMemberDto): Promise<Member[]> {
        return await this.memberRepo.find({ where: filterMemberDto })
    }
    async findOneById(id: string): Promise<Member> {
        return await this.memberRepo.findOne({ where: { id: id } })
    }
    async create(createMemberDto: CreateMemberDto): Promise<void> {
        const { code, name } = createMemberDto
        try {
            const member = this.memberRepo.create()
            member.code = code
            member.name = name
            await member.save()
        } catch (err) {
            if (err.code === '23505') {
                throw new ConflictException(`Code ${code} already used.`)
            } else {
                throw new InternalServerErrorException(err);
            }
        }
    }
    async update(id: string, updateMemberDto: UpdateMemberDto): Promise<void> {
        const { code, name } = updateMemberDto
        const member = await this.findOneById(id)
        if (!member) throw new BadRequestException(`Member with ID ${id} not found`)
        try {
            member.code = code
            member.name = name
            await member.save()
        } catch (err) {
            if (err.code === '23505') {
                throw new ConflictException(`Code ${code} already used`)
            } else {
                throw new InternalServerErrorException(err);
            }
        }
    }

    async delelte(id: string): Promise<void> {
        const member = await this.findOneById(id)
        if (!member) throw new BadRequestException(`Member with ID ${id} not found`)
        await member.remove()
    }
}
