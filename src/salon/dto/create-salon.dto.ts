import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSalonDto {
  @ApiProperty({ example: 'Mers rul', description: 'Car`s salon updates' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
