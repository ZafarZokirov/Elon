import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProfileDto {
  @ApiProperty({ example: '60', description: 'Height' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
