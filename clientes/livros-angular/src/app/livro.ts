export class Livro {
    codigo: String; 
    codEditora: number; 
    titulo: String;
    resumo: String; 
    autores: String[];
    constructor(codigo: String, codEditora: number, titulo: String, resumo: String, autores: String[]){
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores; 
    }
}
