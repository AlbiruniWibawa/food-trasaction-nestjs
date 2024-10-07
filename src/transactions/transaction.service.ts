import { Injectable } from "@nestjs/common";
import { Transaction } from "./transaction.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Transaction)
        private transactionModel: typeof Transaction
    ) {}

    async create(data: any): Promise<Transaction> {
        return await this.transactionModel.create(data);
    }

    async findAll(): Promise<Transaction[]> {
        return this.transactionModel.findAll();
    }

    async findOne(id: number): Promise<Transaction> {
        return await this.transactionModel.findByPk(id);
    }

    async update(id: number, data: any): Promise<Transaction> {
        const transaction = await this.findOne(id);
        return transaction.update(data);
    }

    async remove(id: number): Promise<void> {
        const transaction = await this.findOne(id);
        await transaction.destroy();
    }
}