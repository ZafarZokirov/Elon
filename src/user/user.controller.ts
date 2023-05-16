import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';
import { adminGuard } from '../guards/admin.guard';
import { UseGuards } from '@nestjs/common';
import { SelfGuard } from '../guards/self.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: 'registration User' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  registration(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.registration(createUserDto, res);
  }
  @ApiOperation({ summary: 'Get Users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(SelfGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @ApiOperation({ summary: 'Get User' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  @UseGuards(SelfGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({ status: 201, type: User })
  @Patch(':id')
  @UseGuards(SelfGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({ status: 201, type: User })
  @Delete(':id')
  @UseGuards(SelfGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
