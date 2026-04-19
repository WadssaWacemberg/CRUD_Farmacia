import { Module } from '@nestjs/common';
import { CrudFarmaciaService } from './crud-farmacia.service';
import { CrudFarmaciaController } from './crud-farmacia.controller';

@Module({
  controllers: [CrudFarmaciaController],
  providers: [CrudFarmaciaService],
})
export class CrudFarmaciaModule {}
