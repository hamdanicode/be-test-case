import { Borrowing } from "src/borrowing/entity/borrowing.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    code: string
    
    @Column()
    title: string

    @Column()
    author: string
    
    @Column()
    stock: number

    @OneToMany(()=>Borrowing,(borowing)=>borowing.book)
    borrowing:Borrowing[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}