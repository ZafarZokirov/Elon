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
import { ColorStatusService } from './color_status.service';
import { CreateColorStatusDto } from './dto/create-color_status.dto';
import { UpdateColorStatusDto } from './dto/update-color_status.dto';
import { ColorStatus } from './models/color_Status.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Color-status')
@Controller('color-status')
export class ColorStatusController {
  constructor(private readonly colorStatusService: ColorStatusService) {}
  @ApiOperation({ summary: 'Add color-status' })
  @ApiResponse({ status: 201, type: ColorStatus })
  @Post()
  create(@Body() createColorStatusDto: CreateColorStatusDto) {
    return this.colorStatusService.create(createColorStatusDto);
  }
  @ApiOperation({ summary: 'Get all color-status' })
  @ApiResponse({ status: 200, type: [ColorStatus] })
  @Get()
  findAll() {
    return this.colorStatusService.findAll();
  }
  @ApiOperation({ summary: 'Get color-status' })
  @ApiResponse({ status: 200, type: ColorStatus })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colorStatusService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update color-status' })
  @ApiResponse({ status: 201, type: ColorStatus })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColorStatusDto: UpdateColorStatusDto,
  ) {
    return this.colorStatusService.update(+id, updateColorStatusDto);
  }
  @ApiOperation({ summary: 'Delete color-status' })
  @ApiResponse({ status: 201, type: ColorStatus })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colorStatusService.remove(+id);
  }
}
