import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WideService } from './wide.service';
import { CreateWideDto } from './dto/create-wide.dto';
import { UpdateWideDto } from './dto/update-wide.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Wide } from './models/wide.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Wide')
@Controller('wide')
export class WideController {
  constructor(private readonly wideService: WideService) {}
  @ApiOperation({ summary: 'Add Wide' })
  @ApiResponse({ status: 201, type: Wide })
  @Post()
  create(@Body() createWideDto: CreateWideDto) {
    return this.wideService.create(createWideDto);
  }
  @ApiOperation({ summary: 'Get all Wides' })
  @ApiResponse({ status: 200, type: [Wide] })
  @Get()
  findAll() {
    return this.wideService.findAll();
  }
  @ApiOperation({ summary: 'Get Wide' })
  @ApiResponse({ status: 200, type: Wide })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wideService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update Wide' })
  @ApiResponse({ status: 201, type: Wide })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWideDto: UpdateWideDto) {
    return this.wideService.update(+id, updateWideDto);
  }
  @ApiOperation({ summary: 'Delete Wide' })
  @ApiResponse({ status: 201, type: Wide })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wideService.remove(+id);
  }
}
