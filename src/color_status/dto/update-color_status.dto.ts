import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateColorStatusDto {
  @ApiProperty({ example: 'ne krashena', description: 'Car`s color status' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
