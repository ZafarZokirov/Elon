import { Module } from '@nestjs/common';
import { LayoutService } from './layout.service';
import { LayoutController } from './layout.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Layout } from './models/layout.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Layout]),JwtModule.register({})],
  controllers: [LayoutController],
  providers: [LayoutService]
})
export class LayoutModule {}
