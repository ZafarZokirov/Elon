import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWideDto {
  @ApiProperty({ example: '200', description: 'Wide' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
