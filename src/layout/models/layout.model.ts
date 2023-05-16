import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface LayoutAttr {
  name: string;
}
@Table({ tableName: 'region' })
export class Layout extends Model<Layout, LayoutAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Laccetti', description: 'Car`s model' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
