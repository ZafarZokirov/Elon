import { PartialType } from '@nestjs/mapped-types';
import { CreateDiskDto } from './create-disk.dto';

export class UpdateDiskDto extends PartialType(CreateDiskDto) {}
