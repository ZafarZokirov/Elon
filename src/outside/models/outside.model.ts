import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface OutsideAttr {
  name: string;
}
@Table({ tableName: 'outside' })
export class Outside extends Model<Outside, OutsideAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Spoyler', description: 'Car`s outside updates' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
