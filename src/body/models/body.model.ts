import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface BodyAttr {
  name: string;
}
@Table({ tableName: 'body' })
export class Bodie extends Model<Bodie, BodyAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'sedan', description: 'Body`s name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
