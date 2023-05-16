import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'John', description: 'User`s first name' })
  @IsNotEmpty()
  @IsString()
  first_name?: string;
  @ApiProperty({ example: 'Johnson', description: 'User`s last name' })
  @IsNotEmpty()
  @IsString()
  last_name?: string;
  @ApiProperty({
    example: '+998901113322',
    description: 'User`s phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone_number?: string;
  @ApiProperty({ example: '2000-03-03', description: 'User`s birthday' })
  @IsNotEmpty()
  @IsDateString()
  birthday?: Date;
  @ApiProperty({ example: 'male', description: 'User`s gender' })
  @IsNotEmpty()
  @IsString()
  gender?: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  region_id?: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @IsNotEmpty()
  district_id?: number;
}
