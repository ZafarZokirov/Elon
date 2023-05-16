import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Transmission } from './models/transmission.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Transmission')
@Controller('transmission')
export class TransmissionController {
  constructor(private readonly transmissionService: TransmissionService) {}
  @ApiOperation({ summary: 'Add transmission' })
  @ApiResponse({ status: 201, type: Transmission })
  @Post()
  create(@Body() createTransmissionDto: CreateTransmissionDto) {
    return this.transmissionService.create(createTransmissionDto);
  }
  @ApiOperation({ summary: 'Get all transmission' })
  @ApiResponse({ status: 200, type: [Transmission] })
  @Get()
  findAll() {
    return this.transmissionService.findAll();
  }
  @ApiOperation({ summary: 'Get transmission' })
  @ApiResponse({ status: 200, type: Transmission })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transmissionService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update transmission' })
  @ApiResponse({ status: 201, type: Transmission })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransmissionDto: UpdateTransmissionDto,
  ) {
    return this.transmissionService.update(+id, updateTransmissionDto);
  }
  @ApiOperation({ summary: 'Delete transmission' })
  @ApiResponse({ status: 201, type: Transmission })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transmissionService.remove(+id);
  }
}
