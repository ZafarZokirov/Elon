import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAutoForPartDto } from './dto/create-auto_for_part.dto';
import { UpdateAutoForPartDto } from './dto/update-auto_for_part.dto';
import { AutoForPart } from './models/auto_for_part.model';

@Injectable()
export class AutoForPartService {
  constructor(@InjectModel(AutoForPart)
   private readonly autoforpartRepo:typeof AutoForPart){}
  async create(createAutoForPartDto: CreateAutoForPartDto) {
    const autoforpart=await this.autoforpartRepo.findOne({where:{extra_information:createAutoForPartDto.extra_information}})
    if(autoforpart){
      throw new BadRequestException("This autoforpart is alredy created")
    }
    return await this.autoforpartRepo.create(createAutoForPartDto)
  }

  async findAll() {
    return await this.autoforpartRepo.findAll()
  }

  async findOne(id: number) {
    const autoforpart=await this.autoforpartRepo.findOne({where:{id}})
    if(!autoforpart){
      throw new UnauthorizedException("autoforpart isn't created")
    }
  }

  
  async update(id: number, updateAutoForPartDto: UpdateAutoForPartDto) {
    const autoforpart = await this.autoforpartRepo.findOne({ where: { id } });
    if (!autoforpart) {
      throw new NotFoundException('autoforpart not found');
    }
    const updatedAutoForPart = await this.autoforpartRepo.update(
      { ...updateAutoForPartDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'autoforpart updated successfully',
      autoforpart: updatedAutoForPart[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const autoforpart = await this.autoforpartRepo.findOne({ where: { id } });
    if (!autoforpart) {
      throw new NotFoundException('AutoForPart not found');
    }
    await this.autoforpartRepo.destroy({ where: { id } });
    const response = {
      message: 'autoforpart removed successfully',
      autoforpartID: id,
    };

    return response;
  }
}
