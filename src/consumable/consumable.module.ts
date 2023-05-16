import { Module } from '@nestjs/common';
import { ConsumableService } from './consumable.service';
import { ConsumableController } from './consumable.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Consumable } from './models/consumable.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Consumable]),JwtModule.register({}),JwtModule.register({})],
  controllers: [ConsumableController],
  providers: [ConsumableService]
})
export class ConsumableModule {}
