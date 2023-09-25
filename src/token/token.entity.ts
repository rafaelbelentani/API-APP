import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id_token: number;

  @Column({ length: 255 })
  hash: string;

  @Column({ length: 100 })
  username: string; 
}