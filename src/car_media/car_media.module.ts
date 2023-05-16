import { Module } from '@nestjs/common';
import { CarMediaService } from './car_media.service';
import { CarMediaController } from './car_media.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarMedia } from './models/car_media.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([CarMedia]),JwtModule.register({})],
  controllers: [CarMediaController],
  providers: [CarMediaService]
})
export class CarMediaModule {}
