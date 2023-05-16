import { Module } from '@nestjs/common';
import { TransmissionService } from './transmission.service';
import { TransmissionController } from './transmission.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transmission } from './models/transmission.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Transmission]),JwtModule.register({})],
  controllers: [TransmissionController],
  providers: [TransmissionService]
})
export class TransmissionModule {}
