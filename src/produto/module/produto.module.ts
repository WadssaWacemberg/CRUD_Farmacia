
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../service/produto.service';
import { ProdutoController } from '../controller/produto.controller';
import { CategoriaModule } from '../../categoria/module/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    CategoriaModule 
  ],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [TypeOrmModule]
})
export class ProdutoModule {}