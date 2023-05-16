import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOpticDto {
  @ApiProperty({ example: 'Led', description: 'Car`s optics' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
