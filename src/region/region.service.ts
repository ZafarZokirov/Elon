import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './models/region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region)
   private readonly regionRepo:typeof Region){}
   async create(createRegionDto: CreateRegionDto) {
    const region=await this.regionRepo.findOne({where:{name:createRegionDto.name}})
    if(region){
      throw new BadRequestException("This region is alredy created")
    }
    return await this.regionRepo.create(createRegionDto)
  }

  async findAll() {
    return await this.regionRepo.findAll()
  }

  async findOne(id: number) {
    const region=await this.regionRepo.findOne({where:{id}})
    if(!region){
      throw new UnauthorizedException("region isn't created")
    }
  }

  
  async update(id: number, updateRegionDto: UpdateRegionDto) {
    const region = await this.regionRepo.findOne({ where: { id } });
    if (!region) {
      throw new NotFoundException('region not found');
    }
    const updatedRegion = await this.regionRepo.update(
      { ...updateRegionDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'region updated successfully',
      region: updatedRegion[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const region = await this.regionRepo.findOne({ where: { id } });
    if (!region) {
      throw new NotFoundException('Region not found');
    }
    await this.regionRepo.destroy({ where: { id } });
    const response = {
      message: 'region removed successfully',
      regionID: id,
    };

    return response;
  }
}


