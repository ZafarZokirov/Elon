import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Brand } from "../../brand/models/brand.model"
import { District } from "../../district/models/district.model"
import { Layout } from "../../layout/models/layout.model"
import { Region } from "../../region/models/region.model"

interface AutoForPartAttr{
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
    brand_id:number
    layout_id:number
}
@Table({tableName:"autoForPart"})
export class AutoForPart extends Model<AutoForPart,AutoForPartAttr>{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id:number
    @Column({
        type:DataType.BOOLEAN
    })
    bargaining:boolean
    @Column({
        type:DataType.BOOLEAN
    })
    is_new:boolean
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
    @ForeignKey(()=>Brand)
    @Column({
        type:DataType.INTEGER
    })
    brand_id:number
    @BelongsTo(()=>Brand)
    brand:Brand
    @ForeignKey(()=>Layout)
    @Column({
        type:DataType.INTEGER
    })
    layout_id:number
    @BelongsTo(()=>Layout)
    layout:Layout
}
