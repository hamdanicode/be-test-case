import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Member extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    code: string
    
    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}