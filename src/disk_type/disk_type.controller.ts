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
import { DiskTypeService } from './disk_type.service';
import { CreateDiskTypeDto } from './dto/create-disk_type.dto';
import { UpdateDiskTypeDto } from './dto/update-disk_type.dto';
import { DiskType } from './models/disk_type.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Disk-Type')
@Controller('disk-type')
export class DiskTypeController {
  constructor(private readonly diskTypeService: DiskTypeService) {}
  @ApiOperation({ summary: 'Add disk-type' })
  @ApiResponse({ status: 201, type: DiskType })
  @Post()
  create(@Body() createDiskTypeDto: CreateDiskTypeDto) {
    return this.diskTypeService.create(createDiskTypeDto);
  }
  @ApiOperation({ summary: 'Get all disk-types' })
  @ApiResponse({ status: 200, type: [DiskType] })
  @Get()
  findAll() {
    return this.diskTypeService.findAll();
  }
  @ApiOperation({ summary: 'Get disk-type' })
  @ApiResponse({ status: 200, type: DiskType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diskTypeService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update disk-type' })
  @ApiResponse({ status: 201, type: DiskType })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiskTypeDto: UpdateDiskTypeDto,
  ) {
    return this.diskTypeService.update(+id, updateDiskTypeDto);
  }
  @ApiOperation({ summary: 'Delete disk-type' })
  @ApiResponse({ status: 201, type: DiskType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diskTypeService.remove(+id);
  }
}
