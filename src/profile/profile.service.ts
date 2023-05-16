import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './models/profile.model';

@Injectable()
export class ProfileService {
  constructor(@InjectModel(Profile)
   private readonly profileRepo:typeof Profile){}
   async create(createProfileDto: CreateProfileDto) {
    const profile=await this.profileRepo.findOne({where:{name:createProfileDto.name}})
    if(profile){
      throw new BadRequestException("This profile is alredy created")
    }
    return await this.profileRepo.create(createProfileDto)
  }

  async findAll() {
    return await this.profileRepo.findAll()
  }

  async findOne(id: number) {
    const profile=await this.profileRepo.findOne({where:{id}})
    if(!profile){
      throw new UnauthorizedException("profile isn't created")
    }
  }

  
  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = await this.profileRepo.findOne({ where: { id } });
    if (!profile) {
      throw new NotFoundException('profile not found');
    }
    const updatedProfile = await this.profileRepo.update(
      { ...updateProfileDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'profile updated successfully',
      profile: updatedProfile[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const profile = await this.profileRepo.findOne({ where: { id } });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    await this.profileRepo.destroy({ where: { id } });
    const response = {
      message: 'profile removed successfully',
      profileID: id,
    };

    return response;
  }
}


