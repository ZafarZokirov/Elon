import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTireTypeDto {
  @ApiProperty({ example: 'Zimnie', description: 'Tyre-type' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
