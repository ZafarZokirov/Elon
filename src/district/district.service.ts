import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District)
   private readonly districtRepo:typeof District){}
  async create(createDistrictDto: CreateDistrictDto) {
    const district=await this.districtRepo.findOne({where:{name:createDistrictDto.name}})
    if(district){
      throw new BadRequestException("This district is alredy created")
    }
    return await this.districtRepo.create(createDistrictDto)
  }

  async findAll() {
    return await this.districtRepo.findAll()
  }

  async findOne(id: number) {
    const district=await this.districtRepo.findOne({where:{id}})
    if(!district){
      throw new UnauthorizedException("district isn't created")
    }
  }

  
  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const district = await this.districtRepo.findOne({ where: { id } });
    if (!district) {
      throw new NotFoundException('district not found');
    }
    const updatedDistrict = await this.districtRepo.update(
      { ...updateDistrictDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'district updated successfully',
      district: updatedDistrict[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const district = await this.districtRepo.findOne({ where: { id } });
    if (!district) {
      throw new NotFoundException('District not found');
    }
    await this.districtRepo.destroy({ where: { id } });
    const response = {
      message: 'district removed successfully',
      districtID: id,
    };

    return response;
  }
}


