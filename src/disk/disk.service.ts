import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDiskDto } from './dto/create-disk.dto';
import { UpdateDiskDto } from './dto/update-disk.dto';
import { Disk } from './models/disk.model';

@Injectable()
export class DiskService {
  constructor(@InjectModel(Disk)
   private readonly diskRepo:typeof Disk){}
  async create(createDiskDto: CreateDiskDto) {
    const disk=await this.diskRepo.findOne({where:{name:createDiskDto.name}})
    if(disk){
      throw new BadRequestException("This disk is alredy created")
    }
    return await this.diskRepo.create(createDiskDto)
  }

  async findAll() {
    return await this.diskRepo.findAll()
  }

  async findOne(id: number) {
    const disk=await this.diskRepo.findOne({where:{id}})
    if(!disk){
      throw new UnauthorizedException("disk isn't created")
    }
  }

  
  async update(id: number, updateDiskDto: UpdateDiskDto) {
    const disk = await this.diskRepo.findOne({ where: { id } });
    if (!disk) {
      throw new NotFoundException('disk not found');
    }
    const updatedDisk = await this.diskRepo.update(
      { ...updateDiskDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'disk updated successfully',
      disk: updatedDisk[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const disk = await this.diskRepo.findOne({ where: { id } });
    if (!disk) {
      throw new NotFoundException('Disk not found');
    }
    await this.diskRepo.destroy({ where: { id } });
    const response = {
      message: 'disk removed successfully',
      diskID: id,
    };

    return response;
  }
}

