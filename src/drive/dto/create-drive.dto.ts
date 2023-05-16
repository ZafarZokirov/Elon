import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDriveDto {
  @ApiProperty({ example: 'Peredniy privod', description: 'Car`s drive' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
