import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TransactionsService } from "./transaction.service";

@Controller('transaction')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService) {}

    @Post()
    create(@Body() data: any) {
        return this.transactionsService.create(data);
    }

    @Get()
    findAll() {
        return this.transactionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.transactionsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: any) {
        return this.transactionsService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.transactionsService.remove(id);
    }
}