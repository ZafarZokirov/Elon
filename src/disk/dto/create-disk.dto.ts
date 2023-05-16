import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateDiskDto {
    @ApiProperty({ example: 'Zimnie', description: 'Tyre-type' })
    @IsNotEmpty()
    @IsString()
    name:string
    @ApiProperty({ example: '12000', description: 'price' })
    @IsNotEmpty()
    @IsNumber()
    price:number
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    bargaining:boolean
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    is_new:boolean
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    availability:boolean
    @ApiProperty({ example: 'extra info', description: 'extra info' })
    @IsNotEmpty()
    @IsString()
    extra_information:string
    @ApiProperty({ example: 'extra info', description: 'extra info' })
    @IsNotEmpty()
    @IsString()
    contact_number:string
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    is_UZS:boolean
    region_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    district_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    disk_type_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    diametr_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    fixing_id:number
}
