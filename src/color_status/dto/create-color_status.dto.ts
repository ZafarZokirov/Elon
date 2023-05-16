import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColorStatusDto {
  @ApiProperty({ example: 'ne krashena', description: 'Car`s color status' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
