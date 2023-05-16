import { PartialType } from '@nestjs/mapped-types';
import { CreateTireDto } from './create-tire.dto';

export class UpdateTireDto extends PartialType(CreateTireDto) {}
