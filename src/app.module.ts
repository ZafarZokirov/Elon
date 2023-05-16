import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { DiskTypeModule } from './disk_type/disk_type.module';
import { DriveModule } from './drive/drive.module';
import { SalonModule } from './salon/salon.module';
import { OpticModule } from './optic/optic.module';
import { CategoryModule } from './category/category.module';
import { BodyModule } from './body/body.module';
import { FuelTypeModule } from './fuel_type/fuel_type.module';
import { TireTypeModule } from './tire_type/tire_type.module';
import { CarMediaModule } from './car_media/car_media.module';
import { TransmissionModule } from './transmission/transmission.module';
import { BrandModule } from './brand/brand.module';
import { OutsideModule } from './outside/outside.module';
import { ColorStatusModule } from './color_status/color_status.module';
import { DiametrModule } from './diametr/diametr.module';
import { FixingModule } from './fixing/fixing.module';
import { WideModule } from './wide/wide.module';
import { ProfileModule } from './profile/profile.module';
import { CarOptionModule } from './car_option/car_option.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { AdminModule } from './admin/admin.module';
import { District } from './district/models/district.model';
import { Drive } from './drive/models/drive.model';
import { Salon } from './salon/models/salon.model';
import { Optic } from './optic/models/optic.model';
import { Category } from './category/models/category.model';
import { Bodie } from './body/models/body.model';
import { FuelType } from './fuel_type/models/fuel_Type.model';
import { TireType } from './tire_type/models/tire_Type.model';
import { CarMedia } from './car_media/models/car_Media.model';
import { Transmission } from './transmission/models/transmission.model';
import { Brand } from './brand/models/brand.model';
import { Outside } from './outside/models/outside.model';
import { ColorStatus } from './color_status/models/color_Status.model';
import { Diametr } from './diametr/models/diametr.model';
import { Fixing } from './fixing/models/fixing.model';
import { Wide } from './wide/models/wide.model';
import { Profile } from './profile/models/profile.model';
import { CarOption } from './car_option/models/car_Option.model';
import { Region } from './region/models/region.model';
import { Admin } from './admin/models/admin.model';
import { DiskType } from './disk_type/models/disk_type.model';
import { LayoutModule } from './layout/layout.module';
import { Layout } from './layout/models/layout.model';
import { UserModule } from './user/user.module';
import { User } from './user/models/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env`, isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        District,
        Drive,
        Salon,
        Optic,
        Category,
        Bodie,
        FuelType,
        DiskType,
        TireType,
        CarMedia,
        Transmission,
        Brand,
        Outside,
        ColorStatus,
        Diametr,
        Fixing,
        Wide,
        Profile,
        CarOption,
        Region,
        District,
        Admin,
        Layout,
        User,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    DiskTypeModule,
    DriveModule,
    SalonModule,
    OpticModule,
    CategoryModule,
    BodyModule,
    FuelTypeModule,
    TireTypeModule,
    CarMediaModule,
    TransmissionModule,
    BrandModule,
    OutsideModule,
    ColorStatusModule,
    DiametrModule,
    FixingModule,
    WideModule,
    ProfileModule,
    CarOptionModule,
    RegionModule,
    DistrictModule,
    AdminModule,
    LayoutModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
