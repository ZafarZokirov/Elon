import { Module } from '@nestjs/common';
import { AutoForPartService } from './auto_for_part.service';
import { AutoForPartController } from './auto_for_part.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AutoForPart } from './models/auto_for_part.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([AutoForPart]),JwtModule.register({})],
  controllers: [AutoForPartController],
  providers: [AutoForPartService]
})
export class AutoForPartModule {}
