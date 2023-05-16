import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoForPartDto } from './create-auto_for_part.dto';

export class UpdateAutoForPartDto extends PartialType(CreateAutoForPartDto) {}
