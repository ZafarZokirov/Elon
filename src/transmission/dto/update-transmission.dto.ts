import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTransmissionDto {
  @ApiProperty({ example: 'automat', description: 'Car`s transmission' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
