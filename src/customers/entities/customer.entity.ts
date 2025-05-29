import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  customerId: string;
  @Column('text')
  customerName: string;
  @Column('text',{unique: true})
  customerEmail: string;
}
