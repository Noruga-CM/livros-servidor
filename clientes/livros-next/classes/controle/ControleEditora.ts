import Editora from './Editora';

interface Editora{
    codEditora: number;
    nome:string;
  }

class ControleEditora{
    
    editoras: Editora[];

    constructor(editoras:Editora[]){
        this.editoras = editoras;
       
    }


    getNomeEditora(codEditora: number){
        
        if(editoras.findIndex( editoras => editoras.codEditora === codEditora) === -1){
            codEditora = 1;
        }
        return this.editoras[editoras.findIndex(editoras => editoras.codEditora === codEditora)].nome;
    }

    getEditoras(): Editora[]{
        return editoras.filter(editoras => editoras.codEditora >= 0);
    }
   
}
// lista base de editoras 
const editoras = [
    { "codEditora": 1, "nome": "Editora A" },
    { "codEditora": 2, "nome": "Editora C" },
    { "codEditora": 3, "nome": "Editora B" }
  ]



export {ControleEditora, editoras, Editora};