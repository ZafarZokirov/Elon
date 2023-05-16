import { Module } from '@nestjs/common';
import { OutsideService } from './outside.service';
import { OutsideController } from './outside.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Outside } from './models/outside.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Outside]),JwtModule.register({})],
  controllers: [OutsideController],
  providers: [OutsideService]
})
export class OutsideModule {}
