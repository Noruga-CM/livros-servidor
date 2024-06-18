import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})

export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = []; 
  public livros: Array<Livro> = [];
  private router: Router;
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService, 
    router: Router
  ) {
    this.router = router;
  }

  async ngOnInit(): Promise<void> {
    try {
      this.editoras = await this.servEditora.getEditoras();
      this.livros = await this.servLivros.obterLivros();
    } catch (error) {
      console.error("Erro ao carregar os dados: ", error);
    }

  }


  excluir = async (codigo: string) => {
    try {
      
      await this.servLivros.excluir(codigo);
      
      
      
    } catch (error) {
      console.error("Erro ao excluir o livro: ", error);
    }
    
   
  }

  obterNome = (codEditora: any) => {
    codEditora = parseInt(codEditora, 10); 
    return this.servEditora.getEditora(codEditora); 
  }
  

}
