import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface DriveAttr {
  name: string;
}
@Table({ tableName: 'drive' })
export class Drive extends Model<Drive, DriveAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Peredniy privod', description: 'Car`s drive' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
