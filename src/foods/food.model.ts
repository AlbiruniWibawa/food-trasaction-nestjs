import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Transaction } from '../transactions/transaction.model';

@Table
export class Food extends Model<Food> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  food_id: number;

  @Column(DataType.STRING)
  food_name: string;

  @Column(DataType.INTEGER)
  price: number;

  @Column(DataType.INTEGER)
  stock: number;

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
