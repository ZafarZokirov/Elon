import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFixingDto } from './dto/create-fixing.dto';
import { UpdateFixingDto } from './dto/update-fixing.dto';
import { Fixing } from './models/fixing.model';

@Injectable()
export class FixingService {
  constructor(
    @InjectModel(Fixing)
    private readonly fixingRepo: typeof Fixing,
  ) {}
  async create(createFixingDto: CreateFixingDto) {
    const fixing = await this.fixingRepo.findOne({
      where: { name: createFixingDto.name },
    });
    if (fixing) {
      throw new BadRequestException('This fixing is alredy created');
    }
    return await this.fixingRepo.create(createFixingDto);
  }

  async findAll() {
    return await this.fixingRepo.findAll();
  }

  async findOne(id: number) {
    const fixing = await this.fixingRepo.findOne({ where: { id } });
    if (!fixing) {
      throw new UnauthorizedException("fixing isn't created");
    }
  }

  async update(id: number, updateFixingDto: UpdateFixingDto) {
    const fixing = await this.fixingRepo.findOne({ where: { id } });
    if (!fixing) {
      throw new NotFoundException('fixing not found');
    }
    const updatedFixing = await this.fixingRepo.update(
      { ...updateFixingDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'fixing updated successfully',
      fixing: updatedFixing[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const fixing = await this.fixingRepo.findOne({ where: { id } });
    if (!fixing) {
      throw new NotFoundException('Fixing not found');
    }
    await this.fixingRepo.destroy({ where: { id } });
    const response = {
      message: 'fixing removed successfully',
      fixingID: id,
    };

    return response;
  }
}
