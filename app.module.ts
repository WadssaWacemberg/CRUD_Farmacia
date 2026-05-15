import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './src/categoria/module/categoria.module'; 
import { ProdutoModule } from './src/produto/module/produto.module';
import { UsuarioModule } from './src/usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', 
      url: process.env.DATABASE_URL, 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
      autoLoadEntities: true,
      extra: {
        ssl: {
          rejectUnauthorized: false, 
        },
      },
    }),
    CategoriaModule,
    ProdutoModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}