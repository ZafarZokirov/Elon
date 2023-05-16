import { Column, DataType, Model, Table } from "sequelize-typescript"

interface mediaAttr{
    table_name:string
    table_id:number
    url:string
    description:string
}
@Table({tableName:"media"})
export class Media extends Model<Media,mediaAttr>{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    id:number
    @Column({
        type:DataType.STRING
    })
    table_name:string
    @Column({
        type:DataType.INTEGER
    })
    table_id:number
    @Column({
        type:DataType.STRING
    })
    url:string
    @Column({
        type:DataType.STRING
    })
    description:string
}
