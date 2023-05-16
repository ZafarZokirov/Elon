import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCarMediaDto {
  @ApiProperty({ example: 'bluetooth', description: 'Car`s media' })
  @IsNotEmpty()
  @IsString()
  name: string;
}
