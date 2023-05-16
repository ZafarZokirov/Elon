import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateConsumableDto } from './dto/create-consumable.dto';
import { UpdateConsumableDto } from './dto/update-consumable.dto';
import { Consumable } from './models/consumable.model';

@Injectable()
export class ConsumableService {
  constructor(@InjectModel(Consumable)
   private readonly consumableRepo:typeof Consumable){}
  async create(createConsumableDto: CreateConsumableDto) {
    const consumable=await this.consumableRepo.findOne({where:{name:createConsumableDto.name}})
    if(consumable){
      throw new BadRequestException("This consumable is alredy created")
    }
    return await this.consumableRepo.create(createConsumableDto)
  }

  async findAll() {
    return await this.consumableRepo.findAll()
  }

  async findOne(id: number) {
    const consumable=await this.consumableRepo.findOne({where:{id}})
    if(!consumable){
      throw new UnauthorizedException("consumable isn't created")
    }
  }

  
  async update(id: number, updateConsumableDto: UpdateConsumableDto) {
    const consumable = await this.consumableRepo.findOne({ where: { id } });
    if (!consumable) {
      throw new NotFoundException('consumable not found');
    }
    const updatedConsumable = await this.consumableRepo.update(
      { ...updateConsumableDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'consumable updated successfully',
      consumable: updatedConsumable[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const consumable = await this.consumableRepo.findOne({ where: { id } });
    if (!consumable) {
      throw new NotFoundException('Consumable not found');
    }
    await this.consumableRepo.destroy({ where: { id } });
    const response = {
      message: 'consumable removed successfully',
      consumableID: id,
    };

    return response;
  }
}


