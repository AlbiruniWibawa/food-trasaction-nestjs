import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customers/customer.model';
import { Food } from './foods/food.model';
import { Transaction } from './transactions/transaction.model';
import { CustomersModule } from './customers/customer.module';
import { FoodsModule } from './foods/food.module';
import { TransactionsModule } from './transactions/transaction.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'db_food_transaction',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Customer, Food, Transaction]),
    CustomersModule,
    FoodsModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
