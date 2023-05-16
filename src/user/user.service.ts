import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userRepo: typeof User,
    private readonly jwtService: JwtService,
  ) {}
  async registration(createUserDto: CreateUserDto, res: Response) {
    const user = await this.userRepo.findOne({
      where: { phone_number: createUserDto.phone_number },
    });
    if (user) {
      throw new BadRequestException('user already exists');
    }
    const newUser = await this.userRepo.create(createUserDto);
    console.log(newUser.id);
    const tokens = await this.getTokens(newUser.id);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
      },
      {
        where: { id: newUser.id },
        returning: true,
      },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'User Registered',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }
  async getTokens(user_id: number) {
    const jwtPayload = {
      id: user_id,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshToken(user_id: number, refreshToken: string, res: Response) {
    const user = await this.userRepo.findOne({
      where: { id: user_id },
    });
    if (!user || !user.hashed_refresh_token) {
      throw new NotFoundException('User not found');
    }
    const decode = await this.jwtService.decode(refreshToken);
    if (user_id !== decode['id']) {
      throw new ForbiddenException('You aren`t this user');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      user.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new BadRequestException('Access denied');
    }
    const tokens = await this.getTokens(user.id);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedUser = await this.userRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: user.id }, returning: true },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'user refreshed',
      user: updatedUser[1][0],
      tokens,
    };
    return response;
  }
  async findAll() {
    return await this.userRepo.findAll();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    const updatedUser = await this.userRepo.update(
      { ...updateUserDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'user updated succesfully',
      user: updatedUser[1][0],
    };
  }

  async remove(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    return await this.userRepo.destroy({ where: { id } });
  }
}
