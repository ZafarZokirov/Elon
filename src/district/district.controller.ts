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
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('District')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}
  @ApiOperation({ summary: 'Add District' })
  @ApiResponse({ status: 201, type: District })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }
  @ApiOperation({ summary: 'Get all Districts' })
  @ApiResponse({ status: 200, type: [District] })
  @Get()
  findAll() {
    return this.districtService.findAll();
  }
  @ApiOperation({ summary: 'Get District' })
  @ApiResponse({ status: 200, type: District })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.districtService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update District' })
  @ApiResponse({ status: 201, type: District })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }
  @ApiOperation({ summary: 'Delete District' })
  @ApiResponse({ status: 201, type: District })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
