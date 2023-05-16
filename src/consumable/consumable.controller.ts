import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumableService } from './consumable.service';
import { CreateConsumableDto } from './dto/create-consumable.dto';
import { UpdateConsumableDto } from './dto/update-consumable.dto';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Consumable } from './models/consumable.model';
@ApiTags('Consumable')
@UseGuards(adminGuard)
@Controller('consumable')
export class ConsumableController {
  constructor(private readonly consumableService: ConsumableService) {}
  @ApiOperation({ summary: 'Add consumable' })
  @ApiResponse({ status: 201, type: Consumable })
  @Post()
  create(@Body() createConsumableDto: CreateConsumableDto) {
    return this.consumableService.create(createConsumableDto);
  }
  @ApiOperation({ summary: 'Get All consumable' })
  @ApiResponse({ status: 201, type: Consumable })
  @Get()
  findAll() {
    return this.consumableService.findAll();
  }
  @ApiOperation({ summary: 'Get consumable' })
  @ApiResponse({ status: 201, type: Consumable })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumableService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update consumable' })
  @ApiResponse({ status: 201, type: Consumable })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumableDto: UpdateConsumableDto) {
    return this.consumableService.update(+id, updateConsumableDto);
  }
  @ApiOperation({ summary: 'Delete consumable' })
  @ApiResponse({ status: 201, type: Consumable })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumableService.remove(+id);
  }
}
