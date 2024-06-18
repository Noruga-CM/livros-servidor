const baseURL = "http://localhost:3030/livros"; 

interface Livro {
    codigo: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

class ControleLivro {
    lista_livros?: LivroMongo[];

    constructor(lista_livros?: LivroMongo[]) { 
        this.lista_livros = lista_livros;
    }

    obterLivros = async() => {
        try {
            const response = await fetch(baseURL);
            const data = await response.json();

            return data.map((livro: LivroMongo) => {
                return {
                    codigo: livro._id!.toString(),
                    codEditora: livro.codEditora,
                    titulo: livro.titulo,
                    resumo: livro.resumo,
                    autores: livro.autores
                };
            });
        } catch (error) {
            console.error("Não foi possível obter o livro. Motivo: ", error); 
            return [];
        }
    }

    incluirLivro = async(livro: Livro) => {
        try {

            const livroMongo: LivroMongo = {
                _id: null,
                codEditora: livro.codEditora,
                titulo: livro.titulo,
                resumo: livro.resumo,
                autores: livro.autores};


            const response = await fetch(baseURL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(livroMongo)});

            return response.ok;
        } catch (error) {
            console.error("Erro ao incluir livro. Motivo: ", error);
            return false;
        }
    }

    excluir = async(codigo: string) => {
        try {
            const response = await fetch(`http://localhost:3030/livros/${codigo}`, {method: 'DELETE'});
            return response.ok;
        } 
        
        catch (error) {
            console.error("Erro ao excluir livro:", error);
            return false;
        }
    }
}

export { ControleLivro };