import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCarMediaDto } from './dto/create-car_Media.dto';
import { UpdateCarMediaDto } from './dto/update-car_Media.dto';
import { CarMedia } from './models/car_Media.model';

@Injectable()
export class CarMediaService {
  constructor(@InjectModel(CarMedia)
   private readonly carMediaRepo:typeof CarMedia){}
   async create(createCarMediaDto: CreateCarMediaDto) {
    const carMedia=await this.carMediaRepo.findOne({where:{name:createCarMediaDto.name}})
    if(carMedia){
      throw new BadRequestException("This carMedia is alredy created")
    }
    return await this.carMediaRepo.create(createCarMediaDto)
  }

  async findAll() {
    return await this.carMediaRepo.findAll()
  }

  async findOne(id: number) {
    const carMedia=this.carMediaRepo.findOne({where:{id}})
    if(!carMedia){
      throw new UnauthorizedException("carMedia isn't created")
    }
  }

  
  async update(id: number, updateCarMediaDto: UpdateCarMediaDto) {
    const carMedia = await this.carMediaRepo.findOne({ where: { id } });
    if (!carMedia) {
      throw new NotFoundException('carMedia not found');
    }
    const updatedCarMedia = await this.carMediaRepo.update(
      { ...updateCarMediaDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'carMedia updated successfully',
      carMedia: updatedCarMedia[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const carMedia = await this.carMediaRepo.findOne({ where: { id } });
    if (!carMedia) {
      throw new NotFoundException('CarMedia not found');
    }
    await this.carMediaRepo.destroy({ where: { id } });
    const response = {
      message: 'carMedia removed successfully',
      carMediaID: id,
    };

    return response;
  }
}


