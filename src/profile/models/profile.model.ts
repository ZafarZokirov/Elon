import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ProfileAttr {
  name: string;
}
@Table({ tableName: 'profile' })
export class Profile extends Model<Profile, ProfileAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: '60', description: 'Height' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
