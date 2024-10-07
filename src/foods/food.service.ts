import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Food } from "./food.model";

@Injectable()
export class FoodsService {
    constructor(
        @InjectModel(Food)
        private foodModel: typeof Food,
    ) {}

    async create(data: any): Promise<Food> {
        return this.foodModel.create(data);
    }

    async findAll(): Promise<Food[]> {
        return this.foodModel.findAll();
    }

    async findOne(id: number): Promise<Food> {
        return this.foodModel.findByPk(id);
    }

    async update(id: number, data: any): Promise<Food> {
        const food = await this.findOne(id);
        return food.update(data);
    }

    async remove(id: number): Promise<void> {
        const food = await this.findOne(id);
        await food.destroy();
    }
}