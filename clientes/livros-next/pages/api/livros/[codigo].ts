import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro, lista_livros } from "@/classes/controle/ControleLivros";

export default (req: NextApiRequest, res: NextApiResponse) =>{
    try{
           
        if(req.method === "DELETE"){
            const codLivro = req.query['codigo']; 
            const controleLivro =  new ControleLivro(lista_livros);     
            const codigo = parseInt(codLivro, 10);
            controleLivro.excluir(codigo);
            res.status(200).json({messagem: "Item excluido com sucesso."});
        }
        else{
            res.status(405).json({erro: "Método não permitido."});
        }
    } catch(erro) {
        res.status(500).json({erro: "Erro interno do servidor"});
    }
 }