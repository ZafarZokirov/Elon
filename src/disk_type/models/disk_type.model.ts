import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface diskTypeAttr {
  name: string;
}

@Table({ tableName: 'diskType' })
export class DiskType extends Model<DiskType, diskTypeAttr> {
  @ApiProperty({ example: 1, description: 'Unique ID' })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Legkosplavnie', description: 'Disk type' })
  @Column({
    type: DataType.STRING,
  })
  name: string;
}
