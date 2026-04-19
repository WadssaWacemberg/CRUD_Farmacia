import { Test, TestingModule } from '@nestjs/testing';
import { CrudFarmaciaService } from './crud-farmacia.service';

describe('CrudFarmaciaService', () => {
  let service: CrudFarmaciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudFarmaciaService],
    }).compile();

    service = module.get<CrudFarmaciaService>(CrudFarmaciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
