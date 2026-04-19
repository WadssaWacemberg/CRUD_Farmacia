import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudFarmaciaDto } from './create-crud-farmacia.dto';

export class UpdateCrudFarmaciaDto extends PartialType(CreateCrudFarmaciaDto) {}
