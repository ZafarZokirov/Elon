import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiskTypeDto } from './dto/create-disk_type.dto';
import { UpdateDiskTypeDto } from './dto/update-disk_type.dto';
import { DiskType } from './models/disk_type.model';

@Injectable()
export class DiskTypeService {
  constructor(@InjectModel(DiskType)
   private readonly diskTypeRepo:typeof DiskType){}
  async create(createDiskTypeDto: CreateDiskTypeDto) {
    const diskType=await this.diskTypeRepo.findOne({where:{name:createDiskTypeDto.name}})
    if(diskType){
      throw new BadRequestException("This diskType is alredy created")
    }
    return await this.diskTypeRepo.create(createDiskTypeDto)
  }

  async findAll() {
    return await this.diskTypeRepo.findAll()
  }

  async findOne(id: number) {
    const diskType=await this.diskTypeRepo.findOne({where:{id}})
    if(!diskType){
      throw new UnauthorizedException("diskType isn't created")
    }
  }

  
  async update(id: number, updateDiskTypeDto: UpdateDiskTypeDto) {
    const diskType = await this.diskTypeRepo.findOne({ where: { id } });
    if (!diskType) {
      throw new NotFoundException('diskType not found');
    }
    const updatedDiskType = await this.diskTypeRepo.update(
      { ...updateDiskTypeDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'diskType updated successfully',
      diskType: updatedDiskType[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const diskType = await this.diskTypeRepo.findOne({ where: { id } });
    if (!diskType) {
      throw new NotFoundException('DiskType not found');
    }
    await this.diskTypeRepo.destroy({ where: { id } });
    const response = {
      message: 'diskType removed successfully',
      diskTypeID: id,
    };

    return response;
  }
}

