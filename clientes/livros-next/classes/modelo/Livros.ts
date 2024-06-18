export class Livro {
    
    codigo: string;
    titulo:string;
    codEditora: number;
    resumo:string;
    autores: string[];


    constructor(codigo:string, titulo:string, codEditora:number, resumo: string, autores:string[]) 
    {
        this.codigo = codigo;
        this.titulo =  titulo;
        this.codEditora =codEditora;
        this.resumo = resumo;
        this.autores =autores;
    }
}
