import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Projection } from 'src/projections/entities/projection.entity';

@Entity('theaters')
export class Theater {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string; // e.g., 'Theater 1'

  @Column('integer')
  capacity: number;

  @OneToMany(() => Projection, projection => projection.theater)
  projections: Projection[];
}