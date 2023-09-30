import { DetalheColeta } from 'src/detalhecoleta/detalhecoleta.entity';
import { Item } from 'src/item/item.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, } from 'typeorm';

@Entity()
export class Coleta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Usuario, usuario => usuario.coleta) 
  usuario: Usuario;

  @ManyToOne(() => Usuario, cliente => cliente.coleta) 
  cliente: Usuario;

  @ManyToOne(() => Usuario, filial => filial.coleta) 
  filial: Usuario;

  @Column({ length: 100 })
  pedido: String;

  @Column({ length: 100 })
  data_hora: String;

  @OneToMany(() => DetalheColeta, detalhecoleta => detalhecoleta.coleta)
  detalhecoleta: DetalheColeta[];

}