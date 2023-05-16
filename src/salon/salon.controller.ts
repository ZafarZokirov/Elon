import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalonService } from './salon.service';
import { CreateSalonDto } from './dto/create-salon.dto';
import { UpdateSalonDto } from './dto/update-salon.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Salon } from './models/salon.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Salon')
@Controller('salon')
export class SalonController {
  constructor(private readonly salonService: SalonService) {}
  @ApiOperation({ summary: 'Add salon' })
  @ApiResponse({ status: 201, type: Salon })
  @Post()
  create(@Body() createSalonDto: CreateSalonDto) {
    return this.salonService.create(createSalonDto);
  }
  @ApiOperation({ summary: 'Get all salons' })
  @ApiResponse({ status: 200, type: [Salon] })
  @Get()
  findAll() {
    return this.salonService.findAll();
  }
  @ApiOperation({ summary: 'Get salon' })
  @ApiResponse({ status: 200, type: Salon })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salonService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update salon' })
  @ApiResponse({ status: 201, type: Salon })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalonDto: UpdateSalonDto) {
    return this.salonService.update(+id, updateSalonDto);
  }
  @ApiOperation({ summary: 'Delete salon' })
  @ApiResponse({ status: 201, type: Salon })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salonService.remove(+id);
  }
}
