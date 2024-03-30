import { ApiProperty } from "@nestjs/swagger"


export class FilterMemberDto{
    @ApiProperty({
        example: 'M001',
        required:false
     })
    code:string

    @ApiProperty({
        example: 'Angga',
        required:false
     })
    name:string

}