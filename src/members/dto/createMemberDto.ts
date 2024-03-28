import { IsNotEmpty } from "class-validator"


export class CreateMemberDto{
    @IsNotEmpty()
    code:string
    @IsNotEmpty()
    name:string
}