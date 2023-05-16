import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBodyDto {
  @ApiProperty({ example: 'sedan', description: 'Body`s name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
