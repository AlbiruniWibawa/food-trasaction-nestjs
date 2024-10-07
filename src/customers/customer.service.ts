import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './customer.model';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ) {}

  async create(data: any): Promise<Customer> {
    return this.customerModel.create(data);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.findAll();
  }

  async findOne(id: number): Promise<Customer> {
    return this.customerModel.findByPk(id);
  }

  async update(id: number, data: any): Promise<Customer> {
    const customer = await this.findOne(id);
    return customer.update(data);
  }

  async remove(id: number): Promise<void> {
    const customer = await this.findOne(id);
    await customer.destroy();
  }
}
