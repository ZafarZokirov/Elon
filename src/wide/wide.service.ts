import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWideDto } from './dto/create-wide.dto';
import { UpdateWideDto } from './dto/update-wide.dto';
import { Wide } from './models/wide.model';

@Injectable()
export class WideService {
  constructor(@InjectModel(Wide)
   private readonly wideRepo:typeof Wide){}
   async create(createWideDto: CreateWideDto) {
    const wide=await this.wideRepo.findOne({where:{name:createWideDto.name}})
    if(wide){
      throw new BadRequestException("This wide is alredy created")
    }
    return await this.wideRepo.create(createWideDto)
  }

  async findAll() {
    return await this.wideRepo.findAll()
  }

  async findOne(id: number) {
    const wide=await this.wideRepo.findOne({where:{id}})
    if(!wide){
      throw new UnauthorizedException("wide isn't created")
    }
  }

  
  async update(id: number, updateWideDto: UpdateWideDto) {
    const wide = await this.wideRepo.findOne({ where: { id } });
    if (!wide) {
      throw new NotFoundException('wide not found');
    }
    const updatedWide = await this.wideRepo.update(
      { ...updateWideDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'wide updated successfully',
      wide: updatedWide[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const wide = await this.wideRepo.findOne({ where: { id } });
    if (!wide) {
      throw new NotFoundException('Wide not found');
    }
    await this.wideRepo.destroy({ where: { id } });
    const response = {
      message: 'wide removed successfully',
      wideID: id,
    };

    return response;
  }
}


