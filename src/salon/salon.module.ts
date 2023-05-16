import { Module } from '@nestjs/common';
import { SalonService } from './salon.service';
import { SalonController } from './salon.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Salon } from './models/salon.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Salon]),JwtModule.register({})],
  controllers: [SalonController],
  providers: [SalonService]
})
export class SalonModule {}
