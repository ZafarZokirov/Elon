import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOpticDto } from './dto/create-optic.dto';
import { UpdateOpticDto } from './dto/update-optic.dto';
import { Optic } from './models/optic.model';

@Injectable()
export class OpticService {
  constructor(
    @InjectModel(Optic)
    private readonly opticRepo: typeof Optic,
  ) {}
  async create(createOpticDto: CreateOpticDto) {
    const optic = await this.opticRepo.findOne({
      where: { name: createOpticDto.name },
    });
    if (optic) {
      throw new BadRequestException('This optic is alredy created');
    }
    return await this.opticRepo.create(createOpticDto);
  }

  async findAll() {
    return await this.opticRepo.findAll();
  }

  async findOne(id: number) {
    const optic = await this.opticRepo.findOne({ where: { id } });
    if (!optic) {
      throw new UnauthorizedException("optic isn't created");
    }
  }

  async update(id: number, updateOpticDto: UpdateOpticDto) {
    const optic = await this.opticRepo.findOne({ where: { id } });
    if (!optic) {
      throw new NotFoundException('optic not found');
    }
    const updatedOptic = await this.opticRepo.update(
      { ...updateOpticDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'optic updated successfully',
      optic: updatedOptic[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const optic = await this.opticRepo.findOne({ where: { id } });
    if (!optic) {
      throw new NotFoundException('Optic not found');
    }
    await this.opticRepo.destroy({ where: { id } });
    const response = {
      message: 'optic removed successfully',
      opticID: id,
    };

    return response;
  }
}
