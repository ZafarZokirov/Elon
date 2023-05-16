import { Module } from '@nestjs/common';
import { DriveService } from './drive.service';
import { DriveController } from './drive.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Drive } from './models/drive.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Drive]),JwtModule.register({})],
  controllers: [DriveController],
  providers: [DriveService]
})
export class DriveModule {}
