import { Coleta } from 'src/coleta/coleta.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, } from 'typeorm';

@Entity()
export class DetalheColeta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Coleta, coleta => coleta.detalhecoleta) 
  coleta: Coleta;

  @Column({ length: 100 })
  item: String;

  @Column({ length: 100 })
  status: String;

  @Column({ length: 100 })
  quantidade: String;

}