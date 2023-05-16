import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TireTypeAttr {
  name: string;
}
@Table({ tableName: 'tireType' })
export class TireType extends Model<TireType, TireTypeAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Zimnie', description: 'Tyre-type' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
