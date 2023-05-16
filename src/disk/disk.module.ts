import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskController } from './disk.controller';
import { SequelizeScopeError } from 'sequelize';
import { SequelizeMethod } from 'sequelize/types/utils';
import { SequelizeModule } from '@nestjs/sequelize';
import { Disk } from './models/disk.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Disk]),JwtModule.register({})],
  controllers: [DiskController],
  providers: [DiskService]
})
export class DiskModule {}
