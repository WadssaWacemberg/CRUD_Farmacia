import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './src/categoria/module/categoria.module'; 
import { ProdutoModule } from './src/produto/module/produto.module';
<<<<<<< HEAD
=======
import { UsuarioModule } from './src/usuario/usuario.module';
>>>>>>> Configurando-o-Projeto
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
<<<<<<< HEAD
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
=======
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    CategoriaModule,
    ProdutoModule,
    UsuarioModule,
>>>>>>> Configurando-o-Projeto
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}