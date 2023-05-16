import { Module } from '@nestjs/common';
import { TireService } from './tire.service';
import { TireController } from './tire.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tire } from './models/tire.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Tire]),JwtModule.register({})],
  controllers: [TireController],
  providers: [TireService]
})
export class TireModule {}
