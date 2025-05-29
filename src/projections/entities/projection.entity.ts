import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Function } from 'src/functions/entities/function.entity';
import { Theater } from 'src/theaters/entities/theater.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';

@Entity('projections')
export class Projection {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Function, func => func.projections)
  @JoinColumn({ name: 'function_id' })
  function: Function;

  @Column('integer')
  function_id: number;

  @ManyToOne(() => Theater, theater => theater.projections)
  @JoinColumn({ name: 'theater_id' })
  theater: Theater;

  @Column('integer')
  theater_id: number;

  @Column('date')
  date: string;

  @Column('time')
  start_time: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => Ticket, ticket => ticket.projection)
  tickets: Ticket[];
}