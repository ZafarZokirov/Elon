import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FixingAttr {
  name: string;
}
@Table({ tableName: 'fixing' })
export class Fixing extends Model<Fixing, FixingAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: '6x130', description: 'Disk fixing' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
