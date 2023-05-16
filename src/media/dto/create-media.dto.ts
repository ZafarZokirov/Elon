import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateMediaDto {
    @ApiProperty({ example: 'Car', description: 'name of table' })
    @IsNotEmpty()
    @IsString()
    table_name:string
    @ApiProperty({ example: '1', description: 'id of table' })
    @IsNotEmpty()
    @IsNumber()
    table_id:number
    @ApiProperty({ example: 'https/:syte/picture.jpg', description: 'url' })
    @IsNotEmpty()
    @IsString()
    url:string
    @ApiProperty({ example: 'picture of car', description: 'description' })
    @IsNotEmpty()
    @IsString()
    description:string
}
