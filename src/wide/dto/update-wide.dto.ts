import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateWideDto {
  @ApiProperty({ example: '200', description: 'Wide' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
