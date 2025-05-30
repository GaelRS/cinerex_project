import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FunctionEntity } from 'src/functions/entities/function.entity';

@Entity('theaters')
export class Theater {
  @PrimaryGeneratedColumn('uuid')
  theaterId: string;

  @Column('text', { unique: true })
  theaterName: string;

  @Column('char', { length: 1 })
  last_row_letter: string;

  @Column('int')
  last_seat_number: number;

  @OneToMany(() => FunctionEntity, (func) => func.theater)
  functions: FunctionEntity[];
}
