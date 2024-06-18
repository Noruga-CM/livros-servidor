import { NextApiRequest, NextApiResponse } from 'next';
import { ControleEditora, editoras } from "@/classes/controle/ControleEditora";

const controleEditora = new ControleEditora(editoras);

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {       
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        } else {
            res.status(405).json({ erro: "Método não permitido" });
        }
    } catch (erro) {
        res.status(500).json({ erro: "Erro interno do servidor" });
    }
}

export {controleEditora};