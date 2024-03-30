import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class FilterBookDto{
    @ApiProperty({
        example: 'JK-45',
        required:false
     })
    code:string

    @ApiProperty({
        example: 'Harry Potter',
        required:false
     })
     title: string
     
     @ApiProperty({
         example: 'J.K Rowling',
         required:false
      })
    author: string
}