import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OutsideService } from './outside.service';
import { CreateOutsideDto } from './dto/create-outside.dto';
import { UpdateOutsideDto } from './dto/update-outside.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Outside } from './models/outside.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Outside')
@Controller('outside')
export class OutsideController {
  constructor(private readonly outsideService: OutsideService) {}
  @ApiOperation({ summary: 'Add outside' })
  @ApiResponse({ status: 201, type: Outside })
  @Post()
  create(@Body() createOutsideDto: CreateOutsideDto) {
    return this.outsideService.create(createOutsideDto);
  }
  @ApiOperation({ summary: 'Get all outsides' })
  @ApiResponse({ status: 200, type: [Outside] })
  @Get()
  findAll() {
    return this.outsideService.findAll();
  }
  @ApiOperation({ summary: 'Get outside' })
  @ApiResponse({ status: 200, type: Outside })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outsideService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update outside' })
  @ApiResponse({ status: 201, type: Outside })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOutsideDto: UpdateOutsideDto) {
    return this.outsideService.update(+id, updateOutsideDto);
  }
  @ApiOperation({ summary: 'Delete outside' })
  @ApiResponse({ status: 201, type: Outside })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outsideService.remove(+id);
  }
}
