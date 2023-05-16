import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDiskTypeDto {
  @ApiProperty({ example: 'Legkosplavnie', description: 'Disk type' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
