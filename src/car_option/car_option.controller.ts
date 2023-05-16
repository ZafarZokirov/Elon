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
import { CarOptionService } from './car_option.service';
import { CreateCarOptionDto } from './dto/create-car_option.dto';
import { UpdateCarOptionDto } from './dto/update-car_option.dto';
import { CarOption } from './models/car_Option.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Car-Options')
@Controller('car-option')
export class CarOptionController {
  constructor(private readonly carOptionService: CarOptionService) {}
  @ApiOperation({ summary: 'Add car-option' })
  @ApiResponse({ status: 201, type: CarOption })
  @Post()
  create(@Body() createCarOptionDto: CreateCarOptionDto) {
    return this.carOptionService.create(createCarOptionDto);
  }
  @ApiOperation({ summary: 'Get all car-options' })
  @ApiResponse({ status: 200, type: [CarOption] })
  @Get()
  findAll() {
    return this.carOptionService.findAll();
  }
  @ApiOperation({ summary: 'Get one car-option' })
  @ApiResponse({ status: 200, type: CarOption })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carOptionService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update car-option' })
  @ApiResponse({ status: 201, type: CarOption })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarOptionDto: UpdateCarOptionDto,
  ) {
    return this.carOptionService.update(+id, updateCarOptionDto);
  }
  @ApiOperation({ summary: 'Delete car-option' })
  @ApiResponse({ status: 201, type: CarOption })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carOptionService.remove(+id);
  }
}
