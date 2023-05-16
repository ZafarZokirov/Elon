import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransmissionDto } from './dto/create-transmission.dto';
import { UpdateTransmissionDto } from './dto/update-transmission.dto';
import { Transmission } from './models/transmission.model';

@Injectable()
export class TransmissionService {
  constructor(@InjectModel(Transmission)
   private readonly transmissionRepo:typeof Transmission){}
   async create(createTransmissionDto: CreateTransmissionDto) {
    const transmission=await this.transmissionRepo.findOne({where:{name:createTransmissionDto.name}})
    if(transmission){
      throw new BadRequestException("This transmission is alredy created")
    }
    return await this.transmissionRepo.create(createTransmissionDto)
  }

  async findAll() {
    return await this.transmissionRepo.findAll()
  }

  async findOne(id: number) {
    const transmission=await this.transmissionRepo.findOne({where:{id}})
    if(!transmission){
      throw new UnauthorizedException("transmission isn't created")
    }
  }

  
  async update(id: number, updateTransmissionDto: UpdateTransmissionDto) {
    const transmission = await this.transmissionRepo.findOne({ where: { id } });
    if (!transmission) {
      throw new NotFoundException('transmission not found');
    }
    const updatedTransmission = await this.transmissionRepo.update(
      { ...updateTransmissionDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'transmission updated successfully',
      transmission: updatedTransmission[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const transmission = await this.transmissionRepo.findOne({ where: { id } });
    if (!transmission) {
      throw new NotFoundException('Transmission not found');
    }
    await this.transmissionRepo.destroy({ where: { id } });
    const response = {
      message: 'transmission removed successfully',
      transmissionID: id,
    };

    return response;
  }
}


