import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ColorStatusAttr {
  name: string;
}
@Table({ tableName: 'colorStatus' })
export class ColorStatus extends Model<ColorStatus, ColorStatusAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'ne krashena', description: 'Car`s color status' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
