import { Book } from "src/books/entity/book.entity";
import { Member } from "src/members/entity/member.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Borrowing extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    // relation with member
    @ManyToOne(()=>Member,(member)=> member.borrowing)
    member:Member
    // relation with book
    @ManyToOne(()=>Book,(book)=> book.borrowing)
    book:Book

    @Column({default:null})
    returnsAt: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    async isRetunPenalty():Promise<boolean>{
        if(this.returnsAt==null)return false;
        const cDate = new Date(this.createdAt.getTime());
        cDate.setDate(cDate.getDate() + 7);
        console.log(cDate < this.returnsAt);
        
        return cDate < this.returnsAt
    }
}