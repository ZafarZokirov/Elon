import { Module } from '@nestjs/common';
import { OpticService } from './optic.service';
import { OpticController } from './optic.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Optic } from './models/optic.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Optic]),JwtModule.register({})],
  controllers: [OpticController],
  providers: [OpticService]
})
export class OpticModule {}
