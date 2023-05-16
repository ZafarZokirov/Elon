import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLayoutDto {
  @ApiProperty({ example: 'Laccetti', description: 'Car`s model' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
