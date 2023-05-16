import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Region } from '../../region/models/region.model';
import { District } from '../../district/models/district.model';
interface UserAttr {
  first_name: string;
  last_name: string;
  phone_number: string;
  birthday: Date;
  gender: string;
  region_id: number;
  district_id: number;
  is_active:boolean
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'John', description: 'User`s first name' })
  @Column({
    type: DataType.STRING,
  })
  first_name: string;
  @ApiProperty({ example: 'Johnson', description: 'User`s last name' })
  @Column({
    type: DataType.STRING,
  })
  last_name: string;
  @ApiProperty({
    example: '+998901113322',
    description: 'User`s phone number',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;
  @ApiProperty({ example: '2000-03-03', description: 'User`s birthday' })
  @Column({
    type: DataType.DATE,
  })
  birthday: Date;
  @ApiProperty({ example: 'male', description: 'User`s gender' })
  @Column({
    type: DataType.STRING,
  })
  gender: string;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => Region)
  @Column({
    type: DataType.INTEGER,
  })
  region_id: number;
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @ForeignKey(() => District)
  @Column({
    type: DataType.INTEGER,
  })
  district_id: number;
  @ApiProperty({ example: 'token', description: 'User`s refresh token' })
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
  @ApiProperty({
    example: 'True',
    description: 'User active or not',
  })
  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;
  
}
