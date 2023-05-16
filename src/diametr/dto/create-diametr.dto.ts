import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiametrDto {
  @ApiProperty({ example: 'R16', description: 'Diametr' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
