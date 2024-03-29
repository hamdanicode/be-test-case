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
}