import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }

    async cadastrar(usuario: Usuario): Promise<Usuario> {
        const buscaUsuario = await this.usuarioRepository.findOne({
            where: { usuario: usuario.usuario }
        });

        if (buscaUsuario)
            throw new HttpException("O Usuário já existe!", HttpStatus.BAD_REQUEST);

        return await this.usuarioRepository.save(usuario);
    }
}