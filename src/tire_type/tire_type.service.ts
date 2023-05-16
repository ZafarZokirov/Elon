import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTireTypeDto } from './dto/create-tire_Type.dto';
import { UpdateTireTypeDto } from './dto/update-tire_Type.dto';
import { TireType } from './models/tire_Type.model';

@Injectable()
export class TireTypeService {
  constructor(@InjectModel(TireType)
   private readonly tireTypeRepo:typeof TireType){}
   async create(createTireTypeDto: CreateTireTypeDto) {
    const tireType=await this.tireTypeRepo.findOne({where:{name:createTireTypeDto.name}})
    if(tireType){
      throw new BadRequestException("This tireType is alredy created")
    }
    return await this.tireTypeRepo.create(createTireTypeDto)
  }

  async findAll() {
    return await this.tireTypeRepo.findAll()
  }

  async findOne(id: number) {
    const tireType=await this.tireTypeRepo.findOne({where:{id}})
    if(!tireType){
      throw new UnauthorizedException("tireType isn't created")
    }
  }

  
  async update(id: number, updateTireTypeDto: UpdateTireTypeDto) {
    const tireType = await this.tireTypeRepo.findOne({ where: { id } });
    if (!tireType) {
      throw new NotFoundException('tireType not found');
    }
    const updatedTireType = await this.tireTypeRepo.update(
      { ...updateTireTypeDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'tireType updated successfully',
      tireType: updatedTireType[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const tireType = await this.tireTypeRepo.findOne({ where: { id } });
    if (!tireType) {
      throw new NotFoundException('TireType not found');
    }
    await this.tireTypeRepo.destroy({ where: { id } });
    const response = {
      message: 'tireType removed successfully',
      tireTypeID: id,
    };

    return response;
  }
}


