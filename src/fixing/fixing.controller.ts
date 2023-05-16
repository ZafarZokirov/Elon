import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FixingService } from './fixing.service';
import { CreateFixingDto } from './dto/create-fixing.dto';
import { UpdateFixingDto } from './dto/update-fixing.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Fixing } from './models/fixing.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Fixing')
@Controller('fixing')
export class FixingController {
  constructor(private readonly fixingService: FixingService) {}
  @ApiOperation({ summary: 'Add Fixing' })
  @ApiResponse({ status: 201, type: Fixing })
  @Post()
  create(@Body() createFixingDto: CreateFixingDto) {
    return this.fixingService.create(createFixingDto);
  }
  @ApiOperation({ summary: 'Get all Fixings' })
  @ApiResponse({ status: 200, type: [Fixing] })
  @Get()
  findAll() {
    return this.fixingService.findAll();
  }
  @ApiOperation({ summary: 'Get Fixing' })
  @ApiResponse({ status: 200, type: Fixing })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fixingService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update Fixing' })
  @ApiResponse({ status: 201, type: Fixing })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFixingDto: UpdateFixingDto) {
    return this.fixingService.update(+id, updateFixingDto);
  }
  @ApiOperation({ summary: 'Delete Fixing' })
  @ApiResponse({ status: 201, type: Fixing })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fixingService.remove(+id);
  }
}
