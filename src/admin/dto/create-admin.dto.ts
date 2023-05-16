import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'qwerty', description: 'Admin`s username' })
  @IsNotEmpty()
  @IsString()
  username: string;
  @ApiProperty({ example: 'qwerty123', description: 'Admin`s password' })
  @IsNotEmpty()
  @IsString()
  password: string;
  @ApiProperty({
    example: 'qwerty123',
    description: 'Admin`s confirm password',
  })
  @IsNotEmpty()
  @IsString()
  confirm_password: string;
  @ApiProperty({ example: '+98902223344', description: 'Admin`s phone number' })
  @IsNotEmpty()
  @IsString()
  phone_number: string;
  @ApiProperty({ example: 'true', description: 'Admin is owner' })
  is_owner: boolean;
  @ApiProperty({ example: 'true', description: 'Admin is active' })
  is_active: boolean;
  @ApiProperty({ example: 'admin@mail.uz', description: 'Admin`s email' })
  email: string;
  @ApiProperty({ example: '@admin', description: 'Admin`s telegram' })
  telegram: string;
}
