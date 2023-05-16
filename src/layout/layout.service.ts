import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLayoutDto } from './dto/create-layout.dto';
import { UpdateLayoutDto } from './dto/update-layout.dto';
import { Layout } from './models/layout.model';

@Injectable()
export class LayoutService {
  constructor(@InjectModel(Layout)
   private readonly layoutRepo:typeof Layout){}
   async create(createLayoutDto: CreateLayoutDto) {
    const layout=await this.layoutRepo.findOne({where:{name:createLayoutDto.name}})
    if(layout){
      throw new BadRequestException("This layout is alredy created")
    }
    return await this.layoutRepo.create(createLayoutDto)
  }

  async findAll() {
    return await this.layoutRepo.findAll()
  }

  async findOne(id: number) {
    const layout=await this.layoutRepo.findOne({where:{id}})
    if(!layout){
      throw new UnauthorizedException("layout isn't created")
    }
  }

  
  async update(id: number, updateLayoutDto: UpdateLayoutDto) {
    const layout = await this.layoutRepo.findOne({ where: { id } });
    if (!layout) {
      throw new NotFoundException('layout not found');
    }
    const updatedLayout = await this.layoutRepo.update(
      { ...updateLayoutDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'layout updated successfully',
      layout: updatedLayout[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const layout = await this.layoutRepo.findOne({ where: { id } });
    if (!layout) {
      throw new NotFoundException('Layout not found');
    }
    await this.layoutRepo.destroy({ where: { id } });
    const response = {
      message: 'layout removed successfully',
      layoutID: id,
    };

    return response;
  }
}


