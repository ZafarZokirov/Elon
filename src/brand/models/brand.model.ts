import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface BrandAttr {
  name: string;
}
@Table({ tableName: 'brand' })
export class Brand extends Model<Brand, BrandAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'chevrolet', description: 'Car`s brand' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
