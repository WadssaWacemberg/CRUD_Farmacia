import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller("/usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @Post("/cadastrar")
    @HttpCode(HttpStatus.CREATED)
    async cadastrar(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.cadastrar(usuario);
    }
}