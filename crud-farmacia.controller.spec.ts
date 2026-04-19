import { Test, TestingModule } from '@nestjs/testing';
import { CrudFarmaciaController } from './crud-farmacia.controller';
import { CrudFarmaciaService } from './crud-farmacia.service';

describe('CrudFarmaciaController', () => {
  let controller: CrudFarmaciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudFarmaciaController],
      providers: [CrudFarmaciaService],
    }).compile();

    controller = module.get<CrudFarmaciaController>(CrudFarmaciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
