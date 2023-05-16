import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TransmissionAttr {
  name: string;
}
@Table({ tableName: 'transmission' })
export class Transmission extends Model<Transmission, TransmissionAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'automat', description: 'Car`s transmission' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
