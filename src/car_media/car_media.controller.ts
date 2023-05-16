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
import { CarMediaService } from './car_media.service';
import { CreateCarMediaDto } from './dto/create-car_media.dto';
import { UpdateCarMediaDto } from './dto/update-car_media.dto';
import { CarMedia } from './models/car_Media.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Car-media')
@Controller('car-media')
export class CarMediaController {
  constructor(private readonly carMediaService: CarMediaService) {}
  @ApiOperation({ summary: 'Add car-media' })
  @ApiResponse({ status: 201, type: CarMedia })
  @Post()
  create(@Body() createCarMediaDto: CreateCarMediaDto) {
    return this.carMediaService.create(createCarMediaDto);
  }
  @ApiOperation({ summary: 'Get all car-media' })
  @ApiResponse({ status: 200, type: [CarMedia] })
  @Get()
  findAll() {
    return this.carMediaService.findAll();
  }
  @ApiOperation({ summary: 'Get car-media' })
  @ApiResponse({ status: 200, type: CarMedia })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carMediaService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update car-media' })
  @ApiResponse({ status: 201, type: CarMedia })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCarMediaDto: UpdateCarMediaDto,
  ) {
    return this.carMediaService.update(+id, updateCarMediaDto);
  }
  @ApiOperation({ summary: 'Delete car-media' })
  @ApiResponse({ status: 201, type: CarMedia })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carMediaService.remove(+id);
  }
}
