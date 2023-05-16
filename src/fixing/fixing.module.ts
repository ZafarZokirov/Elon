import { Module } from '@nestjs/common';
import { FixingService } from './fixing.service';
import { FixingController } from './fixing.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fixing } from './models/fixing.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Fixing]),JwtModule.register({})],
  controllers: [FixingController],
  providers: [FixingService]
})
export class FixingModule {}
