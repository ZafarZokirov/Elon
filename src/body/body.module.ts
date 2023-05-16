import { Module } from '@nestjs/common';
import { BodyService } from './body.service';
import { BodyController } from './body.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bodie } from './models/body.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Bodie]),JwtModule.register({})],
  controllers: [BodyController],
  providers: [BodyService],
})
export class BodyModule {}
