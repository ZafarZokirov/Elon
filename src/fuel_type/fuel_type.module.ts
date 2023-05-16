import { Module } from '@nestjs/common';
import { FuelTypeService } from './fuel_type.service';
import { FuelTypeController } from './fuel_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelType } from './models/fuel_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([FuelType]),JwtModule.register({})],
  controllers: [FuelTypeController],
  providers: [FuelTypeService]
})
export class FuelTypeModule {}
