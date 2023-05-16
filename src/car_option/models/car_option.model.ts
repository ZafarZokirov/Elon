import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CarOptionAttr {
  name: string;
}
@Table({ tableName: 'carOption' })
export class CarOption extends Model<CarOption, CarOptionAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Obogrev sideniy', description: 'Car`s options' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
