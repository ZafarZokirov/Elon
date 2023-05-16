import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSparePartDto } from './dto/create-spare_part.dto';
import { UpdateSparePartDto } from './dto/update-spare_part.dto';
import { SparePart } from './models/spare_part.model';

@Injectable()
export class SparePartService {
  constructor(@InjectModel(SparePart)
   private readonly sparepartRepo:typeof SparePart){}
  async create(createSparePartDto: CreateSparePartDto) {
    const sparepart=await this.sparepartRepo.findOne({where:{name:createSparePartDto.name}})
    if(sparepart){
      throw new BadRequestException("This sparepart is alredy created")
    }
    return await this.sparepartRepo.create(createSparePartDto)
  }

  async findAll() {
    return await this.sparepartRepo.findAll()
  }

  async findOne(id: number) {
    const sparepart=await this.sparepartRepo.findOne({where:{id}})
    if(!sparepart){
      throw new UnauthorizedException("sparepart isn't created")
    }
  }

  
  async update(id: number, updateSparePartDto: UpdateSparePartDto) {
    const sparepart = await this.sparepartRepo.findOne({ where: { id } });
    if (!sparepart) {
      throw new NotFoundException('sparepart not found');
    }
    const updatedSparePart = await this.sparepartRepo.update(
      { ...updateSparePartDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'sparepart updated successfully',
      sparepart: updatedSparePart[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const sparepart = await this.sparepartRepo.findOne({ where: { id } });
    if (!sparepart) {
      throw new NotFoundException('SparePart not found');
    }
    await this.sparepartRepo.destroy({ where: { id } });
    const response = {
      message: 'sparepart removed successfully',
      sparepartID: id,
    };

    return response;
  }
}

