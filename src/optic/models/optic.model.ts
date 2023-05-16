import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface OpticAttr {
  name: string;
}
@Table({ tableName: 'optic' })
export class Optic extends Model<Optic, OpticAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Led', description: 'Car`s optics' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
