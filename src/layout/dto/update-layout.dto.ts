import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLayoutDto {
  @ApiProperty({ example: 'Laccetti', description: 'Car`s model' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
