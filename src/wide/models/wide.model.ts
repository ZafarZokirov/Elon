import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface WideAttr {
  name: string;
}
@Table({ tableName: 'wide' })
export class Wide extends Model<Wide, WideAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: '200', description: 'Wide' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
