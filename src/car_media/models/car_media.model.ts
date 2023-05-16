import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CarMediaAttr {
  name: string;
}
@Table({ tableName: 'carMedia' })
export class CarMedia extends Model<CarMedia, CarMediaAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'bluetooth', description: 'Car`s media' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
