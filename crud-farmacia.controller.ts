import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudFarmaciaService } from './crud-farmacia.service';
import { CreateCrudFarmaciaDto } from './dto/create-crud-farmacia.dto';
import { UpdateCrudFarmaciaDto } from './dto/update-crud-farmacia.dto';

@Controller('crud-farmacia')
export class CrudFarmaciaController {
  constructor(private readonly crudFarmaciaService: CrudFarmaciaService) {}

  @Post()
  create(@Body() createCrudFarmaciaDto: CreateCrudFarmaciaDto) {
    return this.crudFarmaciaService.create(createCrudFarmaciaDto);
  }

  @Get()
  findAll() {
    return this.crudFarmaciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudFarmaciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudFarmaciaDto: UpdateCrudFarmaciaDto) {
    return this.crudFarmaciaService.update(+id, updateCrudFarmaciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudFarmaciaService.remove(+id);
  }
}
