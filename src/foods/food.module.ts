import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoodsController } from './food.controller';
import { FoodsService } from './food.service';
import { Food } from './food.model';

@Module({
  imports: [SequelizeModule.forFeature([Food])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
