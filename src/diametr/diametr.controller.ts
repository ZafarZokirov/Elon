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
import { DiametrService } from './diametr.service';
import { CreateDiametrDto } from './dto/create-diametr.dto';
import { UpdateDiametrDto } from './dto/update-diametr.dto';
import { Diametr } from './models/diametr.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Diametr')
@Controller('diametr')
export class DiametrController {
  constructor(private readonly diametrService: DiametrService) {}
  @ApiOperation({ summary: 'Add diametr' })
  @ApiResponse({ status: 201, type: Diametr })
  @Post()
  create(@Body() createDiametrDto: CreateDiametrDto) {
    return this.diametrService.create(createDiametrDto);
  }
  @ApiOperation({ summary: 'Get all diametrs' })
  @ApiResponse({ status: 200, type: [Diametr] })
  @Get()
  findAll() {
    return this.diametrService.findAll();
  }
  @ApiOperation({ summary: 'Get diametr' })
  @ApiResponse({ status: 200, type: Diametr })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diametrService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update diametr' })
  @ApiResponse({ status: 201, type: Diametr })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiametrDto: UpdateDiametrDto) {
    return this.diametrService.update(+id, updateDiametrDto);
  }
  @ApiOperation({ summary: 'Delete diametr' })
  @ApiResponse({ status: 201, type: Diametr })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diametrService.remove(+id);
  }
}
