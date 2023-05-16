import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  category_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  brand_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  layout_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  body_id: number;
  @ApiProperty({ example: 2016, description: 'Car`s create year' })
  @IsNotEmpty()
  @IsNumber()
  year: number;
  @ApiProperty({ example: 18000, description: 'Car`s price' })
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @ApiProperty({ example: 'false', description: 'Price is in UZS' })
  is_UZS: boolean;
  @ApiProperty({ example: 'true', description: 'Bargain in price' })
  bargaining: boolean;
  @ApiProperty({ example: 1.5, description: 'Engine`s displacement' })
  @IsNotEmpty()
  @IsNumber()
  engine_displacement: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  fuel_type_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  transmission_id: number;
  @ApiProperty({ example: 75321, description: 'Car`s mileage' })
  @IsNotEmpty()
  @IsNumber()
  mileage: number;
  @ApiProperty({ example: 'Black', description: 'Car`s color' })
  @IsNotEmpty()
  @IsString()
  color: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  color_status_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  drive_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  outside_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  optics_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  car_media_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  salon_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  car_option_id: number;
  @ApiProperty({
    example: 'Not driven about 2 years',
    description: 'Extra information',
  })
  @IsNotEmpty()
  @IsString()
  extra_information: string;
  @ApiProperty({ example: 'gr123456jrkr7890-', description: 'Car`s VIN' })
  @IsNotEmpty()
  @IsString()
  vin: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  region_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  district_id: number;
  @ApiProperty({ example: '+998935554466', description: 'Contact number' })
  @IsNotEmpty()
  @IsString()
  contact_number: string;
}
