import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class UpdateMemberDto{
    @IsNotEmpty()
    @ApiProperty({
        example: 'M001',
        required: true
     })
    code:string
    @IsNotEmpty()
    @ApiProperty({
        example: 'Angga',
        required: true
     })
    name:string

}