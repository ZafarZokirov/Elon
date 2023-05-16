import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'djip', description: 'Car`s category' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
