import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSalonDto } from './dto/create-salon.dto';
import { UpdateSalonDto } from './dto/update-salon.dto';
import { Salon } from './models/salon.model';

@Injectable()
export class SalonService {
  constructor(@InjectModel(Salon)
   private readonly salonRepo:typeof Salon){}
   async create(createSalonDto: CreateSalonDto) {
    const salon=await this.salonRepo.findOne({where:{name:createSalonDto.name}})
    if(salon){
      throw new BadRequestException("This salon is alredy created")
    }
    return await this.salonRepo.create(createSalonDto)
  }

  async findAll() {
    return await this.salonRepo.findAll()
  }

  async findOne(id: number) {
    const salon=await this.salonRepo.findOne({where:{id}})
    if(!salon){
      throw new UnauthorizedException("salon isn't created")
    }
  }

  
  async update(id: number, updateSalonDto: UpdateSalonDto) {
    const salon = await this.salonRepo.findOne({ where: { id } });
    if (!salon) {
      throw new NotFoundException('salon not found');
    }
    const updatedSalon = await this.salonRepo.update(
      { ...updateSalonDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'salon updated successfully',
      salon: updatedSalon[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const salon = await this.salonRepo.findOne({ where: { id } });
    if (!salon) {
      throw new NotFoundException('Salon not found');
    }
    await this.salonRepo.destroy({ where: { id } });
    const response = {
      message: 'salon removed successfully',
      salonID: id,
    };

    return response;
  }
}

