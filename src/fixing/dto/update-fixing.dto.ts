import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateFixingDto {
  @ApiProperty({ example: '6x130', description: 'Disk fixing' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
