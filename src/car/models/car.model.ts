import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Bodie } from '../../body/models/body.model';
import { Brand } from '../../brand/models/brand.model';
import { CarMedia } from '../../car_media/models/car_Media.model';
import { CarOption } from '../../car_option/models/car_Option.model';
import { Category } from '../../category/models/category.model';
import { ColorStatus } from '../../color_status/models/color_Status.model';
import { DistrictController } from '../../district/district.controller';
import { District } from '../../district/models/district.model';
import { Drive } from '../../drive/models/drive.model';
import { FuelType } from '../../fuel_type/models/fuel_Type.model';
import { Layout } from '../../layout/models/layout.model';
import { Optic } from '../../optic/models/optic.model';
import { Outside } from '../../outside/models/outside.model';
import { Region } from '../../region/models/region.model';
import { Salon } from '../../salon/models/salon.model';
import { Transmission } from '../../transmission/models/transmission.model';

interface CarAttr {
  category_id: number;
  brand_id: number;
  layout_id: number;
  body_id: number;
  year: number;
  price: number;
  is_UZS: boolean;
  bargaining: boolean;
  engine_displacement: number;
  fuel_type_id: number;
  transmission_id: number;
  mileage: number;
  color: string;
  color_status_id: number;
  drive_id: number;
  outside_id: number;
  optics_id: number;
  car_media_id: number;
  salon_id: number;
  car_option_id: number;
  extra_information: string;
  vin: string;
  region_id: number;
  district_id: number;
  contact_number: string;
}
@Table({ tableName: 'car' })
export class Car extends Model<Car, CarAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
  })
  category_id: number;
  @BelongsTo(() => Category)
  category: Category;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Brand)
  @Column({
    type: DataType.INTEGER,
  })
  brand_id: number;
  @BelongsTo(() => Brand)
  brand: Brand;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Layout)
  @Column({
    type: DataType.INTEGER,
  })
  layout_id: number;
  @BelongsTo(() => Layout)
  layout: Layout;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Bodie)
  @Column({
    type: DataType.INTEGER,
  })
  body_id: number;
  @BelongsTo(() => Bodie)
  body: Body;
  @ApiProperty({ example: 2016, description: 'Car`s create year' })
  @Column({
    type: DataType.INTEGER,
  })
  year: number;
  @ApiProperty({ example: 18000, description: 'Car`s price' })
  @Column({
    type: DataType.DECIMAL,
  })
  price: number;
  @ApiProperty({ example: 'false', description: 'Price is in UZS' })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_UZS: boolean;
  @ApiProperty({ example: 'true', description: 'Bargain in price' })
  @Column({
    type: DataType.BOOLEAN,
  })
  bargaining: boolean;
  @ApiProperty({ example: 1.5, description: 'Engine`s displacement' })
  @Column({
    type: DataType.DECIMAL,
  })
  engine_displacement: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => FuelType)
  @Column({
    type: DataType.INTEGER,
  })
  fuel_type_id: number;
  @BelongsTo(() => FuelType)
  fuel_type: FuelType;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Transmission)
  @Column({
    type: DataType.INTEGER,
  })
  transmission_id: number;
  @BelongsTo(() => Transmission)
  transmission: Transmission;
  @ApiProperty({ example: 75321, description: 'Car`s mileage' })
  @Column({
    type: DataType.DECIMAL,
  })
  mileage: number;
  @ApiProperty({ example: 'Black', description: 'Car`s color' })
  @Column({
    type: DataType.STRING,
  })
  color: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => ColorStatus)
  @Column({
    type: DataType.INTEGER,
  })
  color_status_id: number;
  @BelongsTo(() => ColorStatus)
  color_status: ColorStatus;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Drive)
  @Column({
    type: DataType.INTEGER,
  })
  drive_id: number;
  @BelongsTo(() => Drive)
  drive: Drive;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Outside)
  @Column({
    type: DataType.INTEGER,
  })
  outside_id: number;
  @BelongsTo(() => Outside)
  outside: Outside;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Optic)
  @Column({
    type: DataType.INTEGER,
  })
  optics_id: number;
  @BelongsTo(() => Optic)
  optics: Optic;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => CarMedia)
  @Column({
    type: DataType.INTEGER,
  })
  car_media_id: number;
  @BelongsTo(() => CarMedia)
  car_media: CarMedia;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Salon)
  @Column({
    type: DataType.INTEGER,
  })
  salon_id: number;
  @BelongsTo(() => Salon)
  salon: Salon;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => CarOption)
  @Column({
    type: DataType.INTEGER,
  })
  car_option_id: number;
  @BelongsTo(() => CarOption)
  car_option: CarOption;
  @ApiProperty({
    example: 'Not driven about 2 years',
    description: 'Extra information',
  })
  @Column({
    type: DataType.STRING,
  })
  extra_information: string;
  @ApiProperty({ example: 'gr123456jrkr7890-', description: 'Car`s VIN' })
  @Column({
    type: DataType.STRING,
  })
  vin: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @BelongsTo(() => Region)
  region: Region;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;
  @BelongsTo(() => District)
  district: District;
  @ApiProperty({ example: '+998935554466', description: 'Contact number' })
  @Column({
    type: DataType.STRING,
  })
  contact_number: string;
}
