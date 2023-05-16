import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOutsideDto } from './dto/create-outside.dto';
import { UpdateOutsideDto } from './dto/update-outside.dto';
import { Outside } from './models/outside.model';

@Injectable()
export class OutsideService {
  constructor(@InjectModel(Outside)
   private readonly outsideRepo:typeof Outside){}
   async create(createOutsideDto: CreateOutsideDto) {
    const outside=await this.outsideRepo.findOne({where:{name:createOutsideDto.name}})
    if(outside){
      throw new BadRequestException("This outside is alredy created")
    }
    return await this.outsideRepo.create(createOutsideDto)
  }

  async findAll() {
    return await this.outsideRepo.findAll()
  }

  async findOne(id: number) {
    const outside=await this.outsideRepo.findOne({where:{id}})
    if(!outside){
      throw new UnauthorizedException("outside isn't created")
    }
  }

  
  async update(id: number, updateOutsideDto: UpdateOutsideDto) {
    const outside = await this.outsideRepo.findOne({ where: { id } });
    if (!outside) {
      throw new NotFoundException('outside not found');
    }
    const updatedOutside = await this.outsideRepo.update(
      { ...updateOutsideDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'outside updated successfully',
      outside: updatedOutside[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const outside = await this.outsideRepo.findOne({ where: { id } });
    if (!outside) {
      throw new NotFoundException('Outside not found');
    }
    await this.outsideRepo.destroy({ where: { id } });
    const response = {
      message: 'outside removed successfully',
      outsideID: id,
    };

    return response;
  }
}


