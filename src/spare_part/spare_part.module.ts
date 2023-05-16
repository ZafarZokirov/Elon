import { Module } from '@nestjs/common';
import { SparePartService } from './spare_part.service';
import { SparePartController } from './spare_part.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SparePart } from './models/spare_part.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([SparePart]),JwtModule.register({})],
  controllers: [SparePartController],
  providers: [SparePartService]
})
export class SparePartModule {}
