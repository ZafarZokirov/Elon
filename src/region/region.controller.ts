import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Region } from './models/region.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}
  @ApiOperation({ summary: 'Add Region' })
  @ApiResponse({ status: 201, type: Region })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }
  @ApiOperation({ summary: 'Get all Regions' })
  @ApiResponse({ status: 200, type: [Region] })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }
  @ApiOperation({ summary: 'Get Region' })
  @ApiResponse({ status: 200, type: Region })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regionService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update Region' })
  @ApiResponse({ status: 201, type: Region })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(+id, updateRegionDto);
  }
  @ApiOperation({ summary: 'Delete Region' })
  @ApiResponse({ status: 201, type: Region })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regionService.remove(+id);
  }
}
