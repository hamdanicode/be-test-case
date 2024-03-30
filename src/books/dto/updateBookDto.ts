import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class UpdateBookDto{
    @IsNotEmpty()
    @ApiProperty({
        example: 'JK-45',
        required:true
     })
    code:string
    
    @IsNotEmpty()
    @ApiProperty({
        example: 'Harry Potter',
        required:true
     })
    title: string
    
    @ApiProperty({
        example: 'J.K Rowling',
        required:true
     })
    @IsNotEmpty()
    author: string
    
    @ApiProperty({
        example: '21',
        required:true
     })
    @IsNotEmpty()
    stock: number
}