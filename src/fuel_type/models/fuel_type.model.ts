import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface FuelTypeAttr {
  name: string;
}
@Table({ tableName: 'fuelType' })
export class FuelType extends Model<FuelType, FuelTypeAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Benzin', description: 'Fuel-type' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
