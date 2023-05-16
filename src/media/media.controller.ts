import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Media } from './models/media.model';

@ApiTags('Media')
@UseGuards(adminGuard)
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}
  @ApiOperation({ summary: 'Add media' })
  @ApiResponse({ status: 201, type: Media })
  @Post()
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.create(createMediaDto);
  }
  @ApiOperation({ summary: 'Get all media' })
  @ApiResponse({ status: 200, type: Media })
  @Get()
  findAll() {
    return this.mediaService.findAll();
  }
  @ApiOperation({ summary: 'Get media' })
  @ApiResponse({ status: 200, type: Media })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update media' })
  @ApiResponse({ status: 201, type: Media })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.update(+id, updateMediaDto);
  }
  @ApiOperation({ summary: 'Delete media' })
  @ApiResponse({ status: 201, type: Media })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(+id);
  }
}
