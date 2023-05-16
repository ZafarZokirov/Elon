import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FindCarDto {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  category_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  brand_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  layout_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  body_id?: number;
  @ApiProperty({ example: 2016, description: 'Car`s create year' })
  @IsNotEmpty()
  @IsNumber()
  start_year?: number;
  @ApiProperty({ example: 2016, description: 'Car`s create year' })
  @IsNotEmpty()
  @IsNumber()
  end_year?: number;
  @ApiProperty({ example: 18000, description: 'Car`s price' })
  @IsNotEmpty()
  @IsNumber()
  start_price?: number;
  @ApiProperty({ example: 18000, description: 'Car`s price' })
  @IsNotEmpty()
  @IsNumber()
  end_price?: number;
  @ApiProperty({ example: 'false', description: 'Price is in UZS' })
  is_UZS: boolean;
  @ApiProperty({ example: 'true', description: 'Bargain in price' })
  bargaining: boolean;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  fuel_type_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  transmission_id?: number;
  @ApiProperty({ example: 75321, description: 'Car`s mileage' })
  @IsNotEmpty()
  @IsNumber()
  start_mileage?: number;
  @ApiProperty({ example: 75321, description: 'Car`s mileage' })
  @IsNotEmpty()
  @IsNumber()
  end_mileage?: number;
  @ApiProperty({ example: 'Black', description: 'Car`s color' })
  @IsNotEmpty()
  @IsString()
  color?: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  drive_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  region_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsNumber()
  district_id?: number;
}
