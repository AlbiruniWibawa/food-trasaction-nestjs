import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Transaction } from '../transactions/transaction.model';

@Table
export class Customer extends Model<Customer> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  customer_id: number;

  @Column(DataType.STRING)
  customer_name: string;

  @Column(DataType.STRING)
  phone: string;

  @Column(DataType.STRING)
  address: string;

  @HasMany(() => Transaction)
  transactions: Transaction[];
}
