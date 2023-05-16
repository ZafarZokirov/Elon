import { Module } from '@nestjs/common';
import { ColorStatusService } from './color_status.service';
import { ColorStatusController } from './color_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ColorStatus } from './models/color_status.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([ColorStatus]),JwtModule.register({})],
  controllers: [ColorStatusController],
  providers: [ColorStatusService]
})
export class ColorStatusModule {}
