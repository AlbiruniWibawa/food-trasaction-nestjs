import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { FoodsService } from "./food.service";

@Controller('foods')
export class FoodsController {
    constructor(private foodsService: FoodsService) {}

    @Post()
    create(@Body() data: any) {
        return this.foodsService.create(data);
    }

    @Get()
    findAll() {
        return this.foodsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.foodsService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: any) {
        return this.foodsService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.foodsService.remove(id);
    }
}