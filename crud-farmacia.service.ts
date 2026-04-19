import { Injectable } from '@nestjs/common';
import { CreateCrudFarmaciaDto } from './dto/create-crud-farmacia.dto';
import { UpdateCrudFarmaciaDto } from './dto/update-crud-farmacia.dto';

@Injectable()
export class CrudFarmaciaService {
  create(createCrudFarmaciaDto: CreateCrudFarmaciaDto) {
    return 'This action adds a new crudFarmacia';
  }

  findAll() {
    return `This action returns all crudFarmacia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crudFarmacia`;
  }

  update(id: number, updateCrudFarmaciaDto: UpdateCrudFarmaciaDto) {
    return `This action updates a #${id} crudFarmacia`;
  }

  remove(id: number) {
    return `This action removes a #${id} crudFarmacia`;
  }
}
