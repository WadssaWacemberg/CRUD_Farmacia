import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'tb_produtos' })
export class Produto {
    [x: string]: any;
<<<<<<< HEAD
=======
    [x: string]: any;
>>>>>>> Configurando-o-Projeto
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    nome!: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    preco!: number;

    @Column({ length: 500 })
    foto!: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria = new Categoria;
}