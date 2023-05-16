import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { adminGuard } from '../guards/admin.guard';
import { BodyService } from './body.service';
import { CreateBodyDto } from './dto/create-body.dto';
import { UpdateBodyDto } from './dto/update-body.dto';
import { Bodie } from './models/body.model';
@ApiTags('Body')
@Controller('body')
@UseGuards(adminGuard)
export class BodyController {
  constructor(private readonly bodyService: BodyService) {}
  @ApiOperation({ summary: 'Add body' })
  @ApiResponse({ status: 201, type: Bodie })
  @Post()
  create(@Body() createBodyDto: CreateBodyDto) {
    return this.bodyService.create(createBodyDto);
  }
  @ApiOperation({ summary: 'Get all Bodies' })
  @ApiResponse({ status: 200, type: [Bodie] })
  @Get()
  findAll() {
    return this.bodyService.findAll();
  }
  @ApiOperation({ summary: 'Get Body' })
  @ApiResponse({ status: 200, type: Bodie })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bodyService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update body' })
  @ApiResponse({ status: 201, type: Bodie })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBodyDto: UpdateBodyDto) {
    return this.bodyService.update(+id, updateBodyDto);
  }
  @ApiOperation({ summary: 'Delete Body' })
  @ApiResponse({ status: 201, type: Bodie })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bodyService.remove(+id);
  }
}
