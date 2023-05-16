import { Module } from '@nestjs/common';
import { AccessoryService } from './accessory.service';
import { AccessoryController } from './accessory.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Accessory } from './models/accessory.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Accessory]),JwtModule.register({})],
  controllers: [AccessoryController],
  providers: [AccessoryService]
})
export class AccessoryModule {}
