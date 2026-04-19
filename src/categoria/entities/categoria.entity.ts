import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: 'tb_categorias' })
export class Categoria {

    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    tipo!: string; 

    // Relacionamento sql : Uma categoria tem muitos produtos
    @OneToMany(() => Produto, (produto: { categoria: any; }) => produto.categoria)
    produto!: Produto[];
}