import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TireService } from './tire.service';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tire } from './models/tire.model';

@UseGuards(adminGuard)
@ApiTags('Tire')
@Controller('tire')
export class TireController {
  constructor(private readonly tireService: TireService) {}
  @ApiOperation({ summary: 'Add tire' })
  @ApiResponse({ status: 201, type: Tire })
  @Post()
  create(@Body() createTireDto: CreateTireDto) {
    return this.tireService.create(createTireDto);
  }
  @ApiOperation({ summary: 'Get all tires' })
  @ApiResponse({ status: 200, type: Tire })
  @Get()
  findAll() {
    return this.tireService.findAll();
  }
  @ApiOperation({ summary: 'Get tire' })
  @ApiResponse({ status: 200, type: Tire })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tireService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update tire' })
  @ApiResponse({ status: 201, type: Tire })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTireDto: UpdateTireDto) {
    return this.tireService.update(+id, updateTireDto);
  }
  @ApiOperation({ summary: 'Delete tire' })
  @ApiResponse({ status: 201, type: Tire })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tireService.remove(+id);
  }
}
