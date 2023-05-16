import { Module } from '@nestjs/common';
import { CarOptionService } from './car_option.service';
import { CarOptionController } from './car_option.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarOption } from './models/car_option.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([CarOption]),JwtModule.register({})],

  controllers: [CarOptionController],
  providers: [CarOptionService]
})
export class CarOptionModule {}
