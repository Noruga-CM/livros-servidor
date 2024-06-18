import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "@/classes/controle/ControleLivros";

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => { 
    try{
        if(req.method === "GET"){
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        }else if(req.method === "POST"){
    
            res.status(200).json({messagem: "Livro incluido na lista com sucesso."});
        }else{
            res.status(405).json({erro: "Método não permitido"});
        }
    } catch(erro){
        res.status(500).json({erro: "Erro interno do servidor"});

    }
}

export {controleLivro};