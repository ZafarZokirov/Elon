import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface SalonAttr {
  name: string;
}
@Table({ tableName: 'salon' })
export class Salon extends Model<Salon, SalonAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Mers rul', description: 'Car`s salon updates' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
