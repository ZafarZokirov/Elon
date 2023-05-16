import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Diametr } from "../../diametr/models/diametr.model"
import { DiskType } from "../../disk_type/models/disk_type.model"
import { District } from "../../district/models/district.model"
import { Fixing } from "../../fixing/models/fixing.model"
import { Region } from "../../region/models/region.model"

interface diskAttr{
    name:string
    price:number
    bargaining:boolean
    is_new:boolean
    availability:boolean
    extra_information:string
    contact_number:string
    is_UZS:boolean
    region_id:number
    district_id:number
    disk_type_id:number
    diametr_id:number
    fixing_id:number
}
@Table({tableName:"disk"})
export class Disk extends Model<Disk,diskAttr>{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id:number
    @Column({
        type:DataType.STRING
    })
    name:string
    @Column({
        type:DataType.BOOLEAN
    })
    bargaining:boolean
    @Column({
        type:DataType.BOOLEAN
    })
    is_new:boolean
    @Column({
        type:DataType.BOOLEAN
    })
    availability:boolean
    @Column({
        type:DataType.STRING
    })
    extra_information:string
    @Column({
        type:DataType.INTEGER
    })
    price:number
    @Column({
        type:DataType.BOOLEAN
    })
    is_UZS:boolean
    @Column({
        type:DataType.STRING
    })
    contact_number:string
    @ForeignKey(() =>Region)
    @Column({
      type: DataType.INTEGER,
    })
    region_id: number;
    @BelongsTo(() =>Region)
    region:Region;
    @ForeignKey(()=>District)
    @Column({
        type:DataType.INTEGER
    })
    district_id:number
    @BelongsTo(()=>District)
    district:District
    @ForeignKey(()=>DiskType)
    @Column({
        type:DataType.INTEGER
    })
    disk_type_id:number
    @BelongsTo(()=>DiskType)
    disk_type:DiskType
    @ForeignKey(()=>Diametr)
    @Column({
        type:DataType.INTEGER
    })
    diametr_id:number
    @BelongsTo(()=>Diametr)
    diametr:Diametr
    @ForeignKey(()=>Fixing)
    @Column({
        type:DataType.INTEGER
    })
    fixing_id:number
    @BelongsTo(()=>Fixing)
    fixing:Fixing
}

