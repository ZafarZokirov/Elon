import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiskTypeDto {
  @ApiProperty({ example: 'Legkosplavnie', description: 'Disk type' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
