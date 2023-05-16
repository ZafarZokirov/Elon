import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John', description: 'User`s first name' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  first_name?: string;
  @ApiProperty({ example: 'Johnson', description: 'User`s last name' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  last_name?: string;
  @ApiProperty({
    example: '+998901113322',
    description: 'User`s phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: '2000-03-03', description: 'User`s birthday' })
  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  birthday?: Date;
  @ApiProperty({ example: 'male', description: 'User`s gender' })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  gender?: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsOptional()
  region_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  @IsOptional()
  district_id?: number;
}
