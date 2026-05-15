import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt'; 
import { Usuario } from './usuario.entity';
import { UsuarioLogin } from './usuario.login';

@Injectable()
export class UsuarioService {
    usuarioRepository: any;
    

    async autenticar(usuarioLogin: UsuarioLogin): Promise<any> {
        
        const buscaUsuario = await this.usuarioRepository.findOne({
            where: { usuario: usuarioLogin.usuario }
        });

        if (buscaUsuario) {
            
            const senhaValida = await bcrypt.compare(usuarioLogin.senha, buscaUsuario.senha);

            if (senhaValida) {
                
                usuarioLogin.id = buscaUsuario.id;
                usuarioLogin.nome = buscaUsuario.nome;
                usuarioLogin.foto = buscaUsuario.foto;
                usuarioLogin.token = 'Bearer ' + 'TOKEN_FAKE_OU_JWT_AQUI'; 
                
                return usuarioLogin;
            }
        }

      
        throw new HttpException('Usuário ou senha inválidos!', HttpStatus.UNAUTHORIZED);
    }

    
    async cadastrar(usuario: Usuario): Promise<Usuario> {
        const buscaUsuario = await this.usuarioRepository.findOne({
            where: { usuario: usuario.usuario }
        });

        if (buscaUsuario)
            throw new HttpException("O Usuário já existe!", HttpStatus.BAD_REQUEST);

       
        usuario.senha = await bcrypt.hash(usuario.senha, 10);
        
        return await this.usuarioRepository.save(usuario);
    }
}