import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { FormsModule } from '@angular/forms';



const baseURL = "http://localhost:3030/livros"
interface LivroMongo{
  _id: String | null;
  codEditora: number; 
  titulo: String; 
  resumo: String; 
  autores: String[]; 
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  
  constructor() {

  }
  obterLivros = async (): Promise<Livro[]> => {
    try {
      const response = await fetch(baseURL, { method: "GET" });
      if (!response.ok) {
        throw new Error("Erro ao carregar livros");
      }
      const data: LivroMongo[] = await response.json();

      const livros: Livro[] = data.map((livroMongo: LivroMongo) => ({
        codigo: livroMongo._id?.toString() || '',
        codEditora: livroMongo.codEditora,
        titulo: livroMongo.titulo,
        resumo: livroMongo.resumo,
        autores: livroMongo.autores
      }));
  
      return livros;
    } catch (error) {
      console.error('Erro ao obter os livros:', error);
      throw error;
    }
  }
  

  incluir = async (livro: Livro): Promise<boolean> => {
    try {
      const livroMongo: LivroMongo = {
        _id: null,
        codEditora: livro.codEditora,
        autores: livro.autores,
        titulo: livro.titulo,
        resumo: livro.resumo,
        
      };
      const opcoes = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(livroMongo)
      };
  
      const response = await fetch(baseURL, opcoes);
  
      if (!response.ok) {
        throw new Error("erro ao adicionar o livro");
      }
      
      return response.ok;
    } catch (error) {
      console.error('Erro ai adicionar o livro:', error);
      throw error;
    }
  }
  excluir = async (codigo: string) => {
    window.location.reload();
    try {
      const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error("erro ao excluir p livro");
      }
      
     
      return response.ok;
    } catch (error) {
      console.error("erro ao excluir o livro:", error);
      throw error;
    }
   
  }
  
  
}
