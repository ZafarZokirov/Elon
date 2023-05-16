import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFuelTypeDto {
  @ApiProperty({ example: 'Benzin', description: 'Fuel-type' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
