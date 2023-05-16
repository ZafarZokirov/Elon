import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OpticService } from './optic.service';
import { CreateOpticDto } from './dto/create-optic.dto';
import { UpdateOpticDto } from './dto/update-optic.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Optic } from './models/optic.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Optic')
@Controller('optic')
export class OpticController {
  constructor(private readonly opticService: OpticService) {}
  @ApiOperation({ summary: 'Add optic' })
  @ApiResponse({ status: 201, type: Optic })
  @Post()
  create(@Body() createOpticDto: CreateOpticDto) {
    return this.opticService.create(createOpticDto);
  }
  @ApiOperation({ summary: 'Get all optics' })
  @ApiResponse({ status: 200, type: [Optic] })
  @Get()
  findAll() {
    return this.opticService.findAll();
  }
  @ApiOperation({ summary: 'Get optic' })
  @ApiResponse({ status: 200, type: Optic })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opticService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update optic' })
  @ApiResponse({ status: 201, type: Optic })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpticDto: UpdateOpticDto) {
    return this.opticService.update(+id, updateOpticDto);
  }
  @ApiOperation({ summary: 'Delete optic' })
  @ApiResponse({ status: 201, type: Optic })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opticService.remove(+id);
  }
}
