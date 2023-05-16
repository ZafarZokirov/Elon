import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface RegionAttr {
  name: string;
}
@Table({ tableName: 'region' })
export class Region extends Model<Region, RegionAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Tashkent viloyati', description: 'Region name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
