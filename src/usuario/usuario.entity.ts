import { Coleta } from 'src/coleta/coleta.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => Coleta, coleta => coleta.usuario)
  coleta: Coleta[];

}