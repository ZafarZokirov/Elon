import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Response } from 'express';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { SelfGuard } from '../guards/self.guard';
import { adminGuard } from '../guards/admin.guard';
@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @ApiOperation({ summary: 'Add Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @Post()
  registration(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.registration(createAdminDto, res);
  }
  @ApiOperation({ summary: 'Get all Admins' })
  @ApiResponse({ status: 200, type: [Admin] })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }
  @UseGuards(SelfGuard)
  @UseGuards(adminGuard)
  @ApiOperation({ summary: 'Logout Admins' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('signout')
  loginout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.logout(refreshToken, res);
  }
  @ApiOperation({ summary: 'Get Admin' })
  @ApiResponse({ status: 200, type: Admin })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }
  @ApiOperation({ summary: 'Refresh Token' })
  @ApiResponse({ status: 201, type: Admin })
  @Post('refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.refreshToken(+id, refreshToken, res);
  }
  @UseGuards(SelfGuard)
  @UseGuards(adminGuard)
  @ApiOperation({ summary: 'Update Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }
  @UseGuards(SelfGuard)
  @UseGuards(adminGuard)
  @ApiOperation({ summary: 'Delete Admin' })
  @ApiResponse({ status: 201, type: Admin })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
  @Patch(':id/active')
  activate(@Param('id') id: string) {
    return this.adminService.activate(+id);
  }
}
