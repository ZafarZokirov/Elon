import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBodyDto } from './dto/create-body.dto';
import { UpdateBodyDto } from './dto/update-body.dto';
import { Bodie } from './models/body.model';

@Injectable()
export class BodyService {
  constructor(
    @InjectModel(Bodie)
    private readonly bodyRepo: typeof Bodie,
  ) {}
  async create(createBodyDto: CreateBodyDto) {
    const body = await this.bodyRepo.findOne({
      where: { name: createBodyDto.name },
    });
    if (body) {
      throw new BadRequestException('This body is alredy created');
    }
    return await this.bodyRepo.create(createBodyDto);
  }

  async findAll() {
    return await this.bodyRepo.findAll();
  }

  async findOne(id: number) {
    const body = await this.bodyRepo.findOne({ where: { id } });
    if (!body) {
      throw new UnauthorizedException("body isn't created");
    }
    return body;
  }

  async update(id: number, updateBodyDto: UpdateBodyDto) {
    const body = await this.bodyRepo.findOne({ where: { id } });
    if (!body) {
      throw new NotFoundException('body not found');
    }
    const updatedBody = await this.bodyRepo.update(
      { ...updateBodyDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'body updated successfully',
      body: updatedBody[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const body = await this.bodyRepo.findOne({ where: { id } });
    if (!body) {
      throw new NotFoundException('Body not found');
    }
    await this.bodyRepo.destroy({ where: { id } });
    const response = {
      message: 'body removed successfully',
      bodyID: id,
    };

    return response;
  }
}
