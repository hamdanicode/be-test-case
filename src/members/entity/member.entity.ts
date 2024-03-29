import { Borrowing } from "src/borrowing/entity/borrowing.entity";
import { BaseEntity, Column, CreateDateColumn, Entity,  OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Member extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    code: string
    
    @Column()
    name: string

    @Column({default:null})
    penaltyAt: Date

    @Column({default:0})
    borrowed: number

    @OneToMany(()=>Borrowing,(borowing)=>borowing.member)
    borrowing:Borrowing[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    async canBorrow():Promise<boolean>{
        return this.borrowed<2;
    }

    async isPenalty():Promise<boolean>{
        if(this.penaltyAt==null)return false;
        
        const cDate = new Date(this.penaltyAt.getTime());
        cDate.setDate(cDate.getDate() + 3);
        const today = new Date();
        return cDate > today
    }
}