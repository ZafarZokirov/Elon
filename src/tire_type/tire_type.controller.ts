import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TireTypeService } from './tire_type.service';
import { CreateTireTypeDto } from './dto/create-tire_type.dto';
import { UpdateTireTypeDto } from './dto/update-tire_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TireType } from './models/tire_Type.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Tire-Type')
@Controller('tire-type')
export class TireTypeController {
  constructor(private readonly tireTypeService: TireTypeService) {}
  @ApiOperation({ summary: 'Add tyre-type' })
  @ApiResponse({ status: 201, type: TireType })
  @Post()
  create(@Body() createTireTypeDto: CreateTireTypeDto) {
    return this.tireTypeService.create(createTireTypeDto);
  }
  @ApiOperation({ summary: 'Get all tyre-types' })
  @ApiResponse({ status: 200, type: [TireType] })
  @Get()
  findAll() {
    return this.tireTypeService.findAll();
  }
  @ApiOperation({ summary: 'Get tyre-type' })
  @ApiResponse({ status: 200, type: TireType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tireTypeService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update tyre-type' })
  @ApiResponse({ status: 201, type: TireType })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTireTypeDto: UpdateTireTypeDto,
  ) {
    return this.tireTypeService.update(+id, updateTireTypeDto);
  }
  @ApiOperation({ summary: 'Delete tyre-type' })
  @ApiResponse({ status: 201, type: TireType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tireTypeService.remove(+id);
  }
}
