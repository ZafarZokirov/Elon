import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccessoryService } from './accessory.service';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
import { UpdateAccessoryDto } from './dto/update-accessory.dto';
import { adminGuard } from '../guards/admin.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Accessory } from './models/accessory.model';

@ApiTags('Accessory')
@UseGuards(adminGuard)
@Controller('accessory')
export class AccessoryController {
  constructor(private readonly accessoryService: AccessoryService) {}
  @ApiOperation({ summary: 'Add accessory' })
  @ApiResponse({ status: 201, type: Accessory })
  @Post()
  create(@Body() createAccessoryDto: CreateAccessoryDto) {
    return this.accessoryService.create(createAccessoryDto);
  }
  @ApiOperation({ summary: 'Get all accessory' })
  @ApiResponse({ status: 201, type: Accessory })
  @Get()
  findAll() {
    return this.accessoryService.findAll();
  }
  @ApiOperation({ summary: 'Get accessory' })
  @ApiResponse({ status: 201, type: Accessory })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessoryService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update accessory' })
  @ApiResponse({ status: 201, type: Accessory })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessoryDto: UpdateAccessoryDto) {
    return this.accessoryService.update(+id, updateAccessoryDto);
  }
  @ApiOperation({ summary: 'Delete accessory' })
  @ApiResponse({ status: 201, type: Accessory })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessoryService.remove(+id);
  }
}
