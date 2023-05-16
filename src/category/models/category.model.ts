import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface CategoryAttr {
  name: string;
}
@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoryAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'djip', description: 'Car`s category' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
