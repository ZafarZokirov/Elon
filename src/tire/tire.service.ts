import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTireDto } from './dto/create-tire.dto';
import { UpdateTireDto } from './dto/update-tire.dto';
import { Tire } from './models/tire.model';

@Injectable()
export class TireService {
  constructor(@InjectModel(Tire)
   private readonly tireRepo:typeof Tire){}
  async create(createTireDto: CreateTireDto) {
    const tire=await this.tireRepo.findOne({where:{name:createTireDto.name}})
    if(tire){
      throw new BadRequestException("This tire is alredy created")
    }
    return await this.tireRepo.create(createTireDto)
  }

  async findAll() {
    return await this.tireRepo.findAll()
  }

  async findOne(id: number) {
    const tire=await this.tireRepo.findOne({where:{id}})
    if(!tire){
      throw new UnauthorizedException("tire isn't created")
    }
  }

  
  async update(id: number, updateTireDto: UpdateTireDto) {
    const tire = await this.tireRepo.findOne({ where: { id } });
    if (!tire) {
      throw new NotFoundException('tire not found');
    }
    const updatedTire = await this.tireRepo.update(
      { ...updateTireDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'tire updated successfully',
      tire: updatedTire[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const tire = await this.tireRepo.findOne({ where: { id } });
    if (!tire) {
      throw new NotFoundException('Tire not found');
    }
    await this.tireRepo.destroy({ where: { id } });
    const response = {
      message: 'tire removed successfully',
      tireID: id,
    };

    return response;
  }
}