import { Module } from '@nestjs/common';
import { WideService } from './wide.service';
import { WideController } from './wide.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Wide } from './models/wide.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Wide]),JwtModule.register({})],
  controllers: [WideController],
  providers: [WideService],
})
export class WideModule {}
