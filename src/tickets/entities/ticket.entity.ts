import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Projection } from 'src/projections/entities/projection.entity';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.customerId)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column('uuid')
  customer_id: string;

  @ManyToOne(() => Projection, projection => projection.tickets)
  @JoinColumn({ name: 'projection_id' })
  projection: Projection;

  @Column('integer')
  projection_id: number;

  @Column('integer')
  number_of_seats: number;

  @Column('date')
  purchase_date: string;
}