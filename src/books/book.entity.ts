import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Book')
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 25})
    title: string;

    @Column()
    description: string;

    @Column({length: 25})
    author: string;
}
