import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SparePartService } from './spare_part.service';
import { CreateSparePartDto } from './dto/create-spare_part.dto';
import { UpdateSparePartDto } from './dto/update-spare_part.dto';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SparePart } from './models/spare_part.model';
@ApiTags("spare-parts")
@UseGuards(adminGuard)
@Controller('spare-part')
export class SparePartController {
  constructor(private readonly sparePartService: SparePartService) {}
  @ApiOperation({ summary: 'Add SparePart' })
  @ApiResponse({ status: 201, type: SparePart })
  @Post()
  create(@Body() createSparePartDto: CreateSparePartDto) {
    return this.sparePartService.create(createSparePartDto);
  }
  @ApiOperation({ summary: 'Get all SparePart' })
  @ApiResponse({ status: 200, type: SparePart })
  @Get()
  findAll() {
    return this.sparePartService.findAll();
  }
  @ApiOperation({ summary: 'Get SparePart' })
  @ApiResponse({ status: 200, type: SparePart })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sparePartService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update SparePart' })
  @ApiResponse({ status: 201, type: SparePart })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSparePartDto: UpdateSparePartDto) {
    return this.sparePartService.update(+id, updateSparePartDto);
  }
  @ApiOperation({ summary: 'Delete SparePart' })
  @ApiResponse({ status: 201, type: SparePart })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sparePartService.remove(+id);
  }
}
