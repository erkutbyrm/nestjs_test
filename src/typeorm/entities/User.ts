import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({ name: "users" })
export class User{
    //primary key, auto incremented
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string

    @Column()
    email: string;

    @Column()
    createdAt: Date;



}