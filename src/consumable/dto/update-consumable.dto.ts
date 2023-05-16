import { PartialType } from '@nestjs/mapped-types';
import { CreateConsumableDto } from './create-consumable.dto';

export class UpdateConsumableDto extends PartialType(CreateConsumableDto) {}
