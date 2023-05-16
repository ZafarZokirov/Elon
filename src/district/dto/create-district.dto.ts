import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDistrictDto {
  @ApiProperty({ example: 'Tashkent', description: 'District`s name' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
