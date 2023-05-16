import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { District } from "../../district/models/district.model"
import { Region } from "../../region/models/region.model"

interface consumableAttr{
    name:string
    price_id:number
    bargaining:boolean
    is_new:boolean
    availability:boolean
    extra_information:string
    region_id:number
    district_id:number
    contact_number:string
    is_UZS:boolean
}
@Table({tableName:"consumable"})
export class Consumable extends Model<Consumable,consumableAttr>{
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
    @Column({
        type:DataType.INTEGER
    })
    price:number
    @Column({
        type:DataType.BOOLEAN
    })
    is_UZS:boolean


}
