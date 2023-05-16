import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './models/car.model';
import { UseGuards } from '@nestjs/common';
import { adminGuard } from '../guards/admin.guard';

@UseGuards(adminGuard)
@ApiTags('Car')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @ApiOperation({ summary: 'Add car' })
  @ApiResponse({ status: 201, type: Car })
  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }
  @ApiOperation({ summary: 'Get all cars' })
  @ApiResponse({ status: 200, type: [Car] })
  @Get()
  findAll() {
    return this.carService.findAll();
  }
  @ApiOperation({ summary: 'Get car' })
  @ApiResponse({ status: 200, type: Car })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update car' })
  @ApiResponse({ status: 201, type: Car })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(+id, updateCarDto);
  }
  @ApiOperation({ summary: 'Delete car' })
  @ApiResponse({ status: 201, type: Car })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carService.remove(+id);
  }
}
