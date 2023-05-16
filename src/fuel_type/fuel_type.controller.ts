import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FuelTypeService } from './fuel_type.service';
import { CreateFuelTypeDto } from './dto/create-fuel_type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FuelType } from './models/fuel_Type.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Fuel-Type')
@Controller('fuel-type')
export class FuelTypeController {
  constructor(private readonly fuelTypeService: FuelTypeService) {}
  @ApiOperation({ summary: 'Add fuel-type' })
  @ApiResponse({ status: 201, type: FuelType })
  @Post()
  create(@Body() createFuelTypeDto: CreateFuelTypeDto) {
    return this.fuelTypeService.create(createFuelTypeDto);
  }
  @ApiOperation({ summary: 'Get all fuel-types' })
  @ApiResponse({ status: 200, type: [FuelType] })
  @Get()
  findAll() {
    return this.fuelTypeService.findAll();
  }
  @ApiOperation({ summary: 'Get fuel-type' })
  @ApiResponse({ status: 200, type: FuelType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fuelTypeService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update fuel-type' })
  @ApiResponse({ status: 201, type: FuelType })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFuelTypeDto: UpdateFuelTypeDto,
  ) {
    return this.fuelTypeService.update(+id, updateFuelTypeDto);
  }
  @ApiOperation({ summary: 'Delete fuel-type' })
  @ApiResponse({ status: 201, type: FuelType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuelTypeService.remove(+id);
  }
}
