import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({ example: 'chevrolet', description: 'Car`s brand' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
