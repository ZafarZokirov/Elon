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
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './models/brand.model';
import { UseGuards } from '@nestjs/common';
import { adminGuard } from '../guards/admin.guard';

@UseGuards(adminGuard)
@ApiTags('Brand')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  @ApiOperation({ summary: 'Add Brand' })
  @ApiResponse({ status: 201, type: Brand })
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }
  @ApiOperation({ summary: 'Get all brands' })
  @ApiResponse({ status: 200, type: [Brand] })
  @Get()
  findAll() {
    return this.brandService.findAll();
  }
  @ApiOperation({ summary: 'Get one brand' })
  @ApiResponse({ status: 200, type: Brand })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update brand' })
  @ApiResponse({ status: 201, type: Brand })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }
  @ApiOperation({ summary: 'Delete Brand' })
  @ApiResponse({ status: 201, type: Brand })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
