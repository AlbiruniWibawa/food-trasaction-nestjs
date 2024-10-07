import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Customer } from '../customers/customer.model';
import { Food } from '../foods/food.model';

@Table
export class Transaction extends Model<Transaction> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  transaction_id: number;

  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  customer_id: number;

  @ForeignKey(() => Food)
  @Column(DataType.INTEGER)
  food_id: number;

  @Column(DataType.INTEGER)
  qty: number;

  @Column(DataType.INTEGER)
  total_price: number;

  @Column(DataType.DATE)
  transaction_date: Date;

  @BelongsTo(() => Customer)
  customer: Customer;

  @BelongsTo(() => Food)
  food: Food;
}
