import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rescues')
export class Rescue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;
}
