import { Module } from '@nestjs/common';
import { DiskTypeService } from './disk_type.service';
import { DiskTypeController } from './disk_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiskType } from './models/disk_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([DiskType]),JwtModule.register({})],
  controllers: [DiskTypeController],
  providers: [DiskTypeService]
})
export class DiskTypeModule {}
