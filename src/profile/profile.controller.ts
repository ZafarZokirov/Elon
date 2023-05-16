import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Profile } from './models/profile.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(adminGuard)
@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @ApiOperation({ summary: 'Add profile' })
  @ApiResponse({ status: 201, type: Profile })
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }
  @ApiOperation({ summary: 'Get all profiles' })
  @ApiResponse({ status: 200, type: [Profile] })
  @Get()
  findAll() {
    return this.profileService.findAll();
  }
  @ApiOperation({ summary: 'Get profile' })
  @ApiResponse({ status: 200, type: Profile })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update profile' })
  @ApiResponse({ status: 201, type: Profile })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(+id, updateProfileDto);
  }
  @ApiOperation({ summary: 'Delete profile' })
  @ApiResponse({ status: 201, type: Profile })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(+id);
  }
}
