import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRegionDto {
  @ApiProperty({ example: 'Tashkent viloyati', description: 'Region name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
