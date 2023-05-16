import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AutoForPartService } from './auto_for_part.service';
import { CreateAutoForPartDto } from './dto/create-auto_for_part.dto';
import { UpdateAutoForPartDto } from './dto/update-auto_for_part.dto';
import { adminGuard } from '../guards/admin.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AutoForPart } from './models/auto_for_part.model';
@ApiTags('Auto_for_part')
@UseGuards(adminGuard)
@Controller('auto-for-part')
export class AutoForPartController {
  constructor(private readonly autoForPartService: AutoForPartService) {}
  @ApiOperation({ summary: 'Add auto_for_part' })
  @ApiResponse({ status: 201, type: AutoForPart })
  @Post()
  create(@Body() createAutoForPartDto: CreateAutoForPartDto) {
    return this.autoForPartService.create(createAutoForPartDto);
  }
  @ApiOperation({ summary: 'Get all auto_for_part' })
  @ApiResponse({ status: 201, type: AutoForPart })
  @Get()
  findAll() {
    return this.autoForPartService.findAll();
  }
  @ApiOperation({ summary: 'Get auto_for_part' })
  @ApiResponse({ status: 201, type: AutoForPart })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autoForPartService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update auto_for_part' })
  @ApiResponse({ status: 201, type: AutoForPart })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutoForPartDto: UpdateAutoForPartDto) {
    return this.autoForPartService.update(+id, updateAutoForPartDto);
  }
  @ApiOperation({ summary: 'Delete auto_for_part' })
  @ApiResponse({ status: 201, type: AutoForPart })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autoForPartService.remove(+id);
  }
}
