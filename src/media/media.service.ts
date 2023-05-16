import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './models/media.model';


@Injectable()
export class MediaService {
  constructor(@InjectModel(Media)
   private readonly mediaRepo:typeof Media){}
  async create(createMediaDto: CreateMediaDto) {
    const media=await this.mediaRepo.findOne({where:{url:createMediaDto.url}})
    if(media){
      throw new BadRequestException("This media is alredy created")
    }
    return await this.mediaRepo.create(createMediaDto)
  }

  async findAll() {
    return await this.mediaRepo.findAll()
  }

  async findOne(id: number) {
    const media=await this.mediaRepo.findOne({where:{id}})
    if(!media){
      throw new UnauthorizedException("media isn't created")
    }
  }

  
  async update(id: number, updateMediaDto: UpdateMediaDto) {
    const media = await this.mediaRepo.findOne({ where: { id } });
    if (!media) {
      throw new NotFoundException('media not found');
    }
    const updatedMedia = await this.mediaRepo.update(
      { ...updateMediaDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'media updated successfully',
      media: updatedMedia[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const media = await this.mediaRepo.findOne({ where: { id } });
    if (!media) {
      throw new NotFoundException('Media not found');
    }
    await this.mediaRepo.destroy({ where: { id } });
    const response = {
      message: 'media removed successfully',
      mediaID: id,
    };

    return response;
  }
}

