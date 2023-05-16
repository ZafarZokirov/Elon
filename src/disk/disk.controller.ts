import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiskService } from './disk.service';
import { CreateDiskDto } from './dto/create-disk.dto';
import { UpdateDiskDto } from './dto/update-disk.dto';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Disk } from './models/disk.model';
@ApiTags('disk')
@UseGuards(adminGuard)
@Controller('disk')
export class DiskController {
  constructor(private readonly diskService: DiskService) {}
  @ApiOperation({ summary: 'Add disk' })
  @ApiResponse({ status: 201, type: Disk })
  @Post()
  create(@Body() createDiskDto: CreateDiskDto) {
    return this.diskService.create(createDiskDto);
  }
  @ApiOperation({ summary: 'Get all disk' })
  @ApiResponse({ status: 201, type: Disk })
  @Get()
  findAll() {
    return this.diskService.findAll();
  }
  @ApiOperation({ summary: 'Get disk' })
  @ApiResponse({ status: 201, type: Disk })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diskService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update disk' })
  @ApiResponse({ status: 201, type: Disk })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiskDto: UpdateDiskDto) {
    return this.diskService.update(+id, updateDiskDto);
  }
  @ApiOperation({ summary: 'Delete disk' })
  @ApiResponse({ status: 201, type: Disk })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diskService.remove(+id);
  }
}
