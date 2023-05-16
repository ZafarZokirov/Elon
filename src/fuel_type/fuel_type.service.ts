import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFuelTypeDto } from './dto/create-fuel_Type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel_Type.dto';
import { FuelType } from './models/fuel_Type.model';

@Injectable()
export class FuelTypeService {
  constructor(@InjectModel(FuelType)
   private readonly fuelTypeRepo:typeof FuelType){}
   async create(createFuelTypeDto: CreateFuelTypeDto) {
    const fuelType=await this.fuelTypeRepo.findOne({where:{name:createFuelTypeDto.name}})
    if(fuelType){
      throw new BadRequestException("This fuelType is alredy created")
    }
    return await this.fuelTypeRepo.create(createFuelTypeDto)
  }

  async findAll() {
    return await this.fuelTypeRepo.findAll()
  }

  async findOne(id: number) {
    const fuelType=await this.fuelTypeRepo.findOne({where:{id}})
    if(!fuelType){
      throw new UnauthorizedException("fuelType isn't created")
    }
  }

  
  async update(id: number, updateFuelTypeDto: UpdateFuelTypeDto) {
    const fuelType = await this.fuelTypeRepo.findOne({ where: { id } });
    if (!fuelType) {
      throw new NotFoundException('fuelType not found');
    }
    const updatedFuelType = await this.fuelTypeRepo.update(
      { ...updateFuelTypeDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'fuelType updated successfully',
      fuelType: updatedFuelType[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const fuelType = await this.fuelTypeRepo.findOne({ where: { id } });
    if (!fuelType) {
      throw new NotFoundException('FuelType not found');
    }
    await this.fuelTypeRepo.destroy({ where: { id } });
    const response = {
      message: 'fuelType removed successfully',
      fuelTypeID: id,
    };

    return response;
  }
}


