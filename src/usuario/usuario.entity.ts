import { Item } from 'src/item/item.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column()
  telefone: string;

  @Column()
  filial: string;

  @Column()
  gestor: string;

  @Column()
  telefone_gestor: string;

  @Column()
  cliente: string;

  @Column()
  cnpj: string;

  @Column()
  contrato: string;

  @Column({ length: 255 })
  senha: string;

}