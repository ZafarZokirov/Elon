import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessoryDto } from './create-accessory.dto';

export class UpdateAccessoryDto extends PartialType(CreateAccessoryDto) {}
