import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface DiametrAttr {
  name: string;
}
@Table({ tableName: 'diametr' })
export class Diametr extends Model<Diametr, DiametrAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'R16', description: 'Diametr' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
