import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"

@Entity()
export class Bills {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    name: string

    @Column()
    contact: number

    @Column()
    mail: string

    @Column()
    amount: number

}
