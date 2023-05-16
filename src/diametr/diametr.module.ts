import { Module } from '@nestjs/common';
import { DiametrService } from './diametr.service';
import { DiametrController } from './diametr.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Diametr } from './models/diametr.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Diametr]),JwtModule.register({})],
  controllers: [DiametrController],
  providers: [DiametrService]
})
export class DiametrModule {}
