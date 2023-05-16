import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFuelTypeDto {
  @ApiProperty({ example: 'Benzin', description: 'Fuel-type' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
