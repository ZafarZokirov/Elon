import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransmissionDto {
  @ApiProperty({ example: 'automat', description: 'Car`s transmission' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
