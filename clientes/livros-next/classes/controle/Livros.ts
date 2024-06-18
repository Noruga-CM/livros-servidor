class Livro{
    codigo: number; 
    codEditora: number; 
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codigo: number, codEditora: number, titulo: string, autores: string[], resumo: string){
        this.codigo = codigo;
        this.resumo = resumo;
        this.autores = autores;
        this.codEditora = codEditora;
        this.titulo = titulo;
    }

    

}

export default {Livro};

