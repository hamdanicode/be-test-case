import { IsNotEmpty } from "class-validator";


export class UpdateMemberDto{
    @IsNotEmpty()
    code:string
    @IsNotEmpty()
    name:string

}