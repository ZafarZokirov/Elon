import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface DistrictAttr {
  name: string;
}
@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Tashkent', description: 'District`s name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
