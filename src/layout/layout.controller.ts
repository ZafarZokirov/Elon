import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LayoutService } from './layout.service';
import { CreateLayoutDto } from './dto/create-layout.dto';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Layout } from './models/layout.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Layout')
@Controller('layout')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}
  @ApiOperation({ summary: 'Add model' })
  @ApiResponse({ status: 201, type: Layout })
  @Post()
  create(@Body() createLayoutDto: CreateLayoutDto) {
    return this.layoutService.create(createLayoutDto);
  }
  @ApiOperation({ summary: 'Get all models' })
  @ApiResponse({ status: 200, type: [Layout] })
  @Get()
  findAll() {
    return this.layoutService.findAll();
  }
  @ApiOperation({ summary: 'Get model' })
  @ApiResponse({ status: 200, type: Layout })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.layoutService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update model' })
  @ApiResponse({ status: 201, type: Layout })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLayoutDto: UpdateLayoutDto) {
    return this.layoutService.update(+id, updateLayoutDto);
  }
  @ApiOperation({ summary: 'Delete model' })
  @ApiResponse({ status: 201, type: Layout })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.layoutService.remove(+id);
  }
}
