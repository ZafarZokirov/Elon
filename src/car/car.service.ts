import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { CreateCarDto } from './dto/create-car.dto';
import { FindCarDto } from './dto/findCar.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './models/car.model';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car)
    private readonly carRepo: typeof Car,
    private readonly jwtService: JwtService,
  ) {}
  async create(createCarDto: CreateCarDto) {
    const car = await this.carRepo.findOne({
      where: { vin: createCarDto.vin },
    });
    if (car) {
      throw new BadRequestException('car alredy exists');
    }
    return this.carRepo.create(createCarDto);
  }

  async findAll() {
    return await this.carRepo.findAll();
  }

  async findOne(id: number) {
    const car = await this.carRepo.findOne({ where: { id } });
    if (!car) {
      throw new UnauthorizedException('car not found');
    }
    return car;
  }

  async findByParam(findCarDto: FindCarDto) {
    const params = { ...findCarDto };
    const where: any = {};
    console.log(params);
    if (params.category_id) {
      where.category_id = { [Op.like]: `%${params.category_id}%` };
    }
    if (params.brand_id) {
      where.brand_id = { [Op.like]: `%${params.brand_id}%` };
    }
    if (params.layout_id) {
      where.layout_id = {
        [Op.like]: `%${params.layout_id}%`,
      };
    }
    if (params.body_id) {
      where.body_id = {
        [Op.like]: `%${params.body_id}%`,
      };
    }
    if (params.start_year && params.end_year) {
      where.role_id = { [Op.gte]: params.start_year };
      where.role_id = { [Op.lte]: params.end_year };
    }
    if (params.start_price && params.end_price) {
      where.role_id = { [Op.gte]: params.start_price };
      where.role_id = { [Op.lte]: params.end_price };
    }
    if (params.is_UZS) {
      where.is_UZS = { [Op.like]: `%${params.is_UZS}%` };
    }
    if (params.bargaining) {
      where.bargaining = { [Op.like]: `%${params.bargaining}%` };
    }
    if (params.fuel_type_id) {
      where.fuel_type_id = { [Op.like]: `%${params.fuel_type_id}%` };
    }
    if (params.transmission_id) {
      where.transmission_id = { [Op.like]: `%${params.transmission_id}%` };
    }
    if (params.start_mileage && params.end_mileage) {
      where.role_id = { [Op.gte]: params.start_mileage };
      where.role_id = { [Op.lte]: params.end_mileage };
    }
    if (params.color) {
      where.color = { [Op.like]: `%${params.color}%` };
    }
    if (params.drive_id) {
      where.drive_id = { [Op.like]: `%${params.drive_id}%` };
    }
    if (params.region_id) {
      where.region_id = { [Op.like]: `%${params.region_id}%` };
    }
    if (params.district_id) {
      where.district_id = { [Op.like]: `%${params.district_id}%` };
    }
    const cars = await this.carRepo.findAll({
      where: where,
    });
    return cars;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.carRepo.findOne({ where: { id } });
    if (!car) {
      throw new UnauthorizedException('car not found');
    }
    const updatedCar = await this.carRepo.update(
      { ...updateCarDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'car updated succesfull',
      car: updatedCar[1][0],
    };
  }

  async remove(id: number) {
    const car = await this.carRepo.findOne({ where: { id } });
    if (!car) {
      throw new UnauthorizedException('car not found');
    }
    return await this.carRepo.destroy({ where: { id } });
  }
}
