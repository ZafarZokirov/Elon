import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4, v4 } from 'uuid';
import { Response } from 'express';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin)
    private readonly adminRepo: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  async registration(createAdminDto: CreateAdminDto, res: Response) {
    const admin = await this.adminRepo.findOne({
      where: { username: createAdminDto.username },
    });
    if (admin) {
      throw new BadRequestException(`Admin already exists`);
    }
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminRepo.create({
      ...createAdminDto,
      hashed_password: hashed_password,
    });
    const tokens = await this.getTokens(
      newAdmin.id,
      newAdmin.is_active,
      newAdmin.is_creator,
    );
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedAdmin = await this.adminRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: newAdmin.id }, returning: true },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'Admin Registered',
      admin: updatedAdmin[1][0],
      tokens,
    };
    return response;
  }
  async getTokens(admin_id: number, is_active: boolean, is_creator: boolean) {
    const jwtPayload = {
      id: admin_id,
      is_active,
      is_creator,
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
  async logout(refreshToken: string, res: Response) {
    const adminDate = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!adminDate) {
      throw new ForbiddenException('Admin not found');
    }
    const updatedAdmin = await this.adminRepo.update(
      { hashed_refresh_token: null },
      { where: { id: adminDate.id }, returning: true },
    );
    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin logged out seccessfully',
      admin: updatedAdmin[1][0],
    };
    return response;
  }
  async refreshToken(admin_id: number, refreshToken: string, res: Response) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin || !admin.hashed_refresh_token) {
      throw new BadRequestException('Admin not found');
    }
    if (admin.id !== admin_id) {
      throw new BadRequestException('You can refresh only your account!');
    }
    const decode = await this.jwtService.decode(refreshToken);
    if (admin_id !== decode['id']) {
      throw new ForbiddenException("You are'nt this admin");
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('Yopiq');
    }
    const tokens = await this.getTokens(
      admin.id,
      admin.is_active,
      admin.is_creator,
    );
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updatedAdmin = await this.adminRepo.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: admin.id }, returning: true },
    );
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'admin refreshed',
      admin: updatedAdmin[1][0],
      tokens,
    };
    return response;
  }
  async update(admin_id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) {
      throw new BadRequestException('Admin is not found');
    }
    if (admin.id !== admin_id) {
      throw new BadRequestException('You can edit only your account!');
    }
    const hashed_password = await bcrypt.hash(updateAdminDto.password, 7);
    const updated_admin = await this.adminRepo.update(
      {
        username: updateAdminDto.username,
        email: updateAdminDto.email,
        phone_number: updateAdminDto.phone_number,
        hashed_password: hashed_password,
      },
      { where: { id: admin.id }, returning: true },
    );
    const response = {
      message: 'admin updated',
      admin: updated_admin[1],
    };
    return response;
  }

  async activate(admin_id: number) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) {
      throw new BadRequestException('Admin is not found');
    }
    if (admin.id !== admin_id) {
      throw new BadRequestException('You can activate only your account!');
    }
    if (admin.is_active == false) {
      const updated_admin = await this.adminRepo.update(
        {
          is_active: true,
        },
        { where: { id: admin.id }, returning: true },
      );
      const response = {
        message: 'admin activated',
        admin: updated_admin[1],
      };
      return response;
    }
    const updated_admin = await this.adminRepo.update(
      {
        is_active: false,
      },
      { where: { id: admin.id }, returning: true },
    );
    const response = {
      message: 'admin diactivate',
      admin: updated_admin[1],
    };
    return response;
  }
  async creatorAdmin(admin_id: number) {
    const admin = await this.adminRepo.findOne({ where: { id: admin_id } });
    if (!admin) {
      throw new BadRequestException('Admin is not found');
    }
    if (admin.is_creator == false) {
      const updated_admin = await this.adminRepo.update(
        {
          is_creator: true,
        },
        { where: { id: admin.id }, returning: true },
      );
      const response = {
        message: 'admin owner',
        admin: updated_admin[1],
      };
      return response;
    }
    const updated_admin = await this.adminRepo.update(
      {
        is_creator: false,
      },
      { where: { id: admin.id }, returning: true },
    );
    const response = {
      message: 'admin no owner',
      admin: updated_admin[1],
    };
    return response;
  }
  async findAll() {
    return await this.adminRepo.findAll();
  }

  async findOne(id: number) {
    const admin = await this.adminRepo.findOne({ where: { id } });
    if (!admin) {
      throw new UnauthorizedException('Admin not found');
    }
  }
  async remove(id: number) {
    const admin = await this.adminRepo.findOne({ where: { id } });
    if (!admin) {
      throw new UnauthorizedException('Admin not found');
    }
    if (admin.id == id) {
      await this.adminRepo.destroy({ where: { id } });
      const response = {
        message: 'Admin deleted',
        admin: admin,
      };
      return response;
    } else {
      throw new BadRequestException('You can delete only your account!');
    }
  }
}
