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
import { DriveService } from './drive.service';
import { CreateDriveDto } from './dto/create-drive.dto';
import { UpdateDriveDto } from './dto/update-drive.dto';
import { Drive } from './models/drive.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Drive')
@Controller('drive')
export class DriveController {
  constructor(private readonly driveService: DriveService) {}
  @ApiOperation({ summary: 'Add Drive' })
  @ApiResponse({ status: 201, type: Drive })
  @Post()
  create(@Body() createDriveDto: CreateDriveDto) {
    return this.driveService.create(createDriveDto);
  }
  @ApiOperation({ summary: 'Get all Drive' })
  @ApiResponse({ status: 200, type: [Drive] })
  @Get()
  findAll() {
    return this.driveService.findAll();
  }
  @ApiOperation({ summary: 'Get Drive' })
  @ApiResponse({ status: 200, type: Drive })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driveService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update Drive' })
  @ApiResponse({ status: 201, type: Drive })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriveDto: UpdateDriveDto) {
    return this.driveService.update(+id, updateDriveDto);
  }
  @ApiOperation({ summary: 'Delete Drive' })
  @ApiResponse({ status: 201, type: Drive })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driveService.remove(+id);
  }
}
