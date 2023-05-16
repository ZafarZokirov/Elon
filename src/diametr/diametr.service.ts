import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiametrDto } from './dto/create-diametr.dto';
import { UpdateDiametrDto } from './dto/update-diametr.dto';
import { Diametr } from './models/diametr.model';

@Injectable()
export class DiametrService {
  constructor(@InjectModel(Diametr)
   private readonly diametrRepo:typeof Diametr){}
  async create(createDiametrDto: CreateDiametrDto) {
    const diametr=await this.diametrRepo.findOne({where:{name:createDiametrDto.name}})
    if(diametr){
      throw new BadRequestException("This diametr is alredy created")
    }
    return await this.diametrRepo.create(createDiametrDto)
  }

  async findAll() {
    return await this.diametrRepo.findAll()
  }

  async findOne(id: number) {
    const diametr=await this.diametrRepo.findOne({where:{id}})
    if(!diametr){
      throw new UnauthorizedException("diametr isn't created")
    }
  }

  
  async update(id: number, updateDiametrDto: UpdateDiametrDto) {
    const diametr = await this.diametrRepo.findOne({ where: { id } });
    if (!diametr) {
      throw new NotFoundException('diametr not found');
    }
    const updatedDiametr = await this.diametrRepo.update(
      { ...updateDiametrDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'diametr updated successfully',
      diametr: updatedDiametr[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const diametr = await this.diametrRepo.findOne({ where: { id } });
    if (!diametr) {
      throw new NotFoundException('Diametr not found');
    }
    await this.diametrRepo.destroy({ where: { id } });
    const response = {
      message: 'diametr removed successfully',
      diametrID: id,
    };

    return response;
  }
}


