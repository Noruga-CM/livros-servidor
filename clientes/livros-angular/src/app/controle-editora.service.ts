import { Injectable } from '@angular/core';
import { Editora } from './editora';
@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {

    this.editoras = [
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' }
    ]
   }

  getEditora(codEditora: number): string | undefined{
    const nomeEditora = this.editoras.filter(e => e.codEditora === codEditora);
    return  nomeEditora[0].nome;
  }
  getEditoras(): Editora[]{
    return this.editoras; 
  }
}
