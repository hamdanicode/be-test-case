import { IsNotEmpty } from "class-validator";


export class CreateBookDto{
    @IsNotEmpty()
    code:string
    
    @IsNotEmpty()
    title: string
    
    @IsNotEmpty()
    author: string
    
    @IsNotEmpty()
    stock: number
}