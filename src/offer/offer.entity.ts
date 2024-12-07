import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity('offers')
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.offers)
  product: Product;

  @Column({ nullable: true })
  days: number;

  @Column({ nullable: true })
  points: number;

  @ManyToOne(() => Product, (product) => product.offers, {
    onDelete: 'CASCADE',
  })
  productEntity: Product;
}
