import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
import { UpdateAccessoryDto } from './dto/update-accessory.dto';
import { Accessory } from './models/accessory.model';

@Injectable()
export class AccessoryService {
  constructor(@InjectModel(Accessory)
   private readonly accessoryRepo:typeof Accessory){}
  async create(createAccessoryDto: CreateAccessoryDto) {
    const accessory=await this.accessoryRepo.findOne({where:{name:createAccessoryDto.name}})
    if(accessory){
      throw new BadRequestException("This accessory is alredy created")
    }
    return await this.accessoryRepo.create(createAccessoryDto)
  }

  async findAll() {
    return await this.accessoryRepo.findAll()
  }

  async findOne(id: number) {
    const accessory=await this.accessoryRepo.findOne({where:{id}})
    if(!accessory){
      throw new UnauthorizedException("accessory isn't created")
    }
  }

  
  async update(id: number, updateAccessoryDto: UpdateAccessoryDto) {
    const accessory = await this.accessoryRepo.findOne({ where: { id } });
    if (!accessory) {
      throw new NotFoundException('accessory not found');
    }
    const updatedAccessory = await this.accessoryRepo.update(
      { ...updateAccessoryDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'accessory updated successfully',
      accessory: updatedAccessory[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const accessory = await this.accessoryRepo.findOne({ where: { id } });
    if (!accessory) {
      throw new NotFoundException('Accessory not found');
    }
    await this.accessoryRepo.destroy({ where: { id } });
    const response = {
      message: 'accessory removed successfully',
      accessoryID: id,
    };

    return response;
  }
}


