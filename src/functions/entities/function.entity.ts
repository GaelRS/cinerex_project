import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Projection } from 'src/projections/entities/projection.entity';

@Entity('functions')
export class Function {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('integer')
  duration: number; // in minutes

  @OneToMany(() => Projection, projection => projection.function)
  projections: Projection[];
}