import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCarOptionDto } from './dto/create-car_Option.dto';
import { UpdateCarOptionDto } from './dto/update-car_Option.dto';
import { CarOption } from './models/car_Option.model';

@Injectable()
export class CarOptionService {
  constructor(@InjectModel(CarOption)
   private readonly carOptionRepo:typeof CarOption){}
   async create(createCarOptionDto: CreateCarOptionDto) {
    const carOption=await this.carOptionRepo.findOne({where:{name:createCarOptionDto.name}})
    if(carOption){
      throw new BadRequestException("This carOption is alredy created")
    }
    return await this.carOptionRepo.create(createCarOptionDto)
  }

  async findAll() {
    return await this.carOptionRepo.findAll()
  }

  async findOne(id: number) {
    const carOption=await this.carOptionRepo.findOne({where:{id}})
    if(!carOption){
      throw new UnauthorizedException("carOption isn't created")
    }
  }

  
  async update(id: number, updateCarOptionDto: UpdateCarOptionDto) {
    const carOption = await  this.carOptionRepo.findOne({ where: { id } });
    if (!carOption) {
      throw new NotFoundException('carOption not found');
    }
    const updatedCarOption = await  this.carOptionRepo.update(
      { ...updateCarOptionDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'carOption updated successfully',
      carOption: updatedCarOption[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const carOption = await this.carOptionRepo.findOne({ where: { id } });
    if (!carOption) {
      throw new NotFoundException('CarOption not found');
    }
    await this.carOptionRepo.destroy({ where: { id } });
    const response = {
      message: 'carOption removed successfully',
      carOptionID: id,
    };

    return response;
  }
}



