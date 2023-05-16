import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category)
   private readonly categoryRepo:typeof Category){}
   async create(createCategoryDto: CreateCategoryDto) {
    const category=await this.categoryRepo.findOne({where:{name:createCategoryDto.name}})
    if(category){
      throw new BadRequestException("This category is alredy created")
    }
    return await this.categoryRepo.create(createCategoryDto)
  }

  async findAll() {
    return await this.categoryRepo.findAll()
  }

  async findOne(id: number) {
    const category=await this.categoryRepo.findOne({where:{id}})
    if(!category){
      throw new UnauthorizedException("category isn't created")
    }
  }

  
  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('category not found');
    }
    const updatedCategory = await this.categoryRepo.update(
      { ...updateCategoryDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'category updated successfully',
      category: updatedCategory[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    await this.categoryRepo.destroy({ where: { id } });
    const response = {
      message: 'category removed successfully',
      categoryID: id,
    };

    return response;
  }
}

