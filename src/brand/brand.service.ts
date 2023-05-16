import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './models/brand.model';

@Injectable()
export class BrandService {
  
  constructor(@InjectModel(Brand)
   private readonly brandRepo:typeof Brand){}
   async create(createBrandDto: CreateBrandDto) {
    const brand=await this.brandRepo.findOne({where:{name:createBrandDto.name}})
    if(brand){
      throw new BadRequestException("This brand is alredy created")
    }
    return this.brandRepo.create(createBrandDto)
  }

  async findAll() {
    return await this.brandRepo.findAll()
  }

  async findOne(id: number) {
    const brand=await this.brandRepo.findOne({where:{id}})
    if(!brand){
      throw new UnauthorizedException("brand isn't created")
    }
    return brand
  }

  
  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = await this.brandRepo.findOne({ where: { id } });
    if (!brand) {
      throw new NotFoundException('brand not found');
    }
    const updatedBrand = await this.brandRepo.update(
      { ...updateBrandDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'brand updated successfully',
      brand: updatedBrand[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const brand = await this.brandRepo.findOne({ where: { id } });
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    await this.brandRepo.destroy({ where: { id } });
    const response = {
      message: 'brand removed successfully',
      brandID: id,
    };

    return response;
  }
}


