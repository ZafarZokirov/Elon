import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateColorStatusDto } from './dto/create-color_Status.dto';
import { UpdateColorStatusDto } from './dto/update-color_Status.dto';
import { ColorStatus } from './models/color_Status.model';

@Injectable()
export class ColorStatusService {
  constructor(@InjectModel(ColorStatus)
   private readonly colorStatusRepo:typeof ColorStatus){}
  async create(createColorStatusDto: CreateColorStatusDto) {
    const colorStatus=await this.colorStatusRepo.findOne({where:{name:createColorStatusDto.name}})
    if(colorStatus){
      throw new BadRequestException("This colorStatus is alredy created")
    }
    return await this.colorStatusRepo.create(createColorStatusDto)
  }

  async findAll() {
    return await this.colorStatusRepo.findAll()
  }

  async findOne(id: number) {
    const colorStatus=await this.colorStatusRepo.findOne({where:{id}})
    if(!colorStatus){
      throw new UnauthorizedException("colorStatus isn't created")
    }
  }

  
  async update(id: number, updateColorStatusDto: UpdateColorStatusDto) {
    const colorStatus = await this.colorStatusRepo.findOne({ where: { id } });
    if (!colorStatus) {
      throw new NotFoundException('colorStatus not found');
    }
    const updatedColorStatus = await this.colorStatusRepo.update(
      { ...updateColorStatusDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'colorStatus updated successfully',
      colorStatus: updatedColorStatus[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const colorStatus = await this.colorStatusRepo.findOne({ where: { id } });
    if (!colorStatus) {
      throw new NotFoundException('ColorStatus not found');
    }
    await this.colorStatusRepo.destroy({ where: { id } });
    const response = {
      message: 'colorStatus removed successfully',
      colorStatusID: id,
    };

    return response;
  }
}


