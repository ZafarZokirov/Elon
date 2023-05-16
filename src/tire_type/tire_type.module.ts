import { Module } from '@nestjs/common';
import { TireTypeService } from './tire_type.service';
import { TireTypeController } from './tire_type.controller';
import { TireType } from './models/tire_type.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([TireType]),JwtModule.register({})],
  controllers: [TireTypeController],
  providers: [TireTypeService]
})
export class TireTypeModule {}
