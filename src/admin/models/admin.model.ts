import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface AdminAttr {
  username: string;
  hashed_password: string;
  hashed_refresh_token: string;
  phone_number: string;
  is_owner: boolean;
  is_active: boolean;
  email: string;
  telegram: string;
  activation_link: string;
}
@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'admin', description: 'Admin`s username' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  username: string;
  @ApiProperty({
    example: 'qwsxfghjm167283',
    description: 'Admin`s hashed password',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;
  @ApiProperty({
    example: 'qserfgyhjkl1234',
    description: 'Admin`s hashed refresh token',
  })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
  @ApiProperty({
    example: '+998902223344',
    description: 'Admin`s phone number',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  phone_number: string;
  @ApiProperty({ example: 'true', description: 'Admin is creator' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creator: boolean;
  @ApiProperty({ example: 'true', description: 'Admin is active' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
  @ApiProperty({
    example: 'adminqswkmf;elf',
    description: 'Admin`s activation link',
  })
  @Column({
    type: DataType.STRING,
  })
  activation_link: string;
  @ApiProperty({ example: 'admin@mail.uz', description: 'Admin`s email' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  email: string;
  @ApiProperty({ example: '@admin123', description: 'Admin`s telegram' })
  @Column({
    type: DataType.STRING,
    unique: true,
  })
  telegram: string;
}
