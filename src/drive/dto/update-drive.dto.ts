import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDriveDto {
  @ApiProperty({ example: 'Peredniy privod', description: 'Car`s drive' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
