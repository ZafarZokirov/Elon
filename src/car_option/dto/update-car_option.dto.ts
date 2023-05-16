import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCarOptionDto {
  @ApiProperty({ example: 'Obogrev sideniy', description: 'Car`s options' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
