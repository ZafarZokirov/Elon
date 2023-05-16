import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDriveDto } from './dto/create-drive.dto';
import { UpdateDriveDto } from './dto/update-drive.dto';
import { Drive } from './models/drive.model';

@Injectable()
export class DriveService {
  constructor(
    @InjectModel(Drive)
    private readonly driveRepo: typeof Drive,
  ) {}
  async create(createDriveDto: CreateDriveDto) {
    const drive = await this.driveRepo.findOne({
      where: { name: createDriveDto.name },
    });
    console.log(drive);
    if (drive) {
      throw new BadRequestException('This drive is alredy created');
    }
    return await this.driveRepo.create(createDriveDto);
  }

  async findAll() {
    return await this.driveRepo.findAll();
  }

  async findOne(id: number) {
    const drive = await this.driveRepo.findOne({ where: { id } });
    if (!drive) {
      throw new UnauthorizedException("drive isn't created");
    }
  }

  async update(id: number, updateDriveDto: UpdateDriveDto) {
    const drive = await this.driveRepo.findOne({ where: { id } });
    if (!drive) {
      throw new NotFoundException('drive not found');
    }
    const updatedDrive = await this.driveRepo.update(
      { ...updateDriveDto },
      { where: { id }, returning: true },
    );
    const response = {
      message: 'drive updated successfully',
      drive: updatedDrive[1][0],
    };
    return response;
  }

  async remove(id: number) {
    const drive = await this.driveRepo.findOne({ where: { id } });
    if (!drive) {
      throw new NotFoundException('Drive not found');
    }
    await this.driveRepo.destroy({ where: { id } });
    const response = {
      message: 'drive removed successfully',
      driveID: id,
    };

    return response;
  }
}
