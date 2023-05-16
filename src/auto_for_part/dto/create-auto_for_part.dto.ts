import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateAutoForPartDto {
    @ApiProperty({ example: 'Zimnie', description: 'Tyre-type' })
    @IsNotEmpty()
    @IsString()
    price:number
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    bargaining:boolean
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    is_new:boolean
    @ApiProperty({ example: 'extra info', description: 'extra info' })
    @IsNotEmpty()
    @IsString()
    extra_information:string
    @ApiProperty({ example: '+998941234567', description: 'contact' })
    @IsNotEmpty()
    @IsString()
    contact_number:string
    @ApiProperty({ example: 'true', description: 'yes or no' })
    @IsNotEmpty()
    @IsBoolean()
    is_UZS:boolean
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    region_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    district_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    brand_id:number
    @ApiProperty({ example: '1', description: 'id' })
    @IsNotEmpty()
    @IsNumber()
    layout_id:number
}
