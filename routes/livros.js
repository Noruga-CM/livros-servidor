const express = require("express");
const router = express.Router();
const livroDao = require("../modelo/livro-dao");



router.get("/", async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } 
    catch(erro) {
        res.status(500).json({ message: erro.message });
    }});

    
router.post("/", async (req, res) => {
    try{
        const novoLivro = await livroDao.incluir(req.body);
        res.status(201).json({ message: "Livro incluído com sucesso", livro: novoLivro });
    }catch (erro) {
        res.status(400).json({ message: erro.message });
    }
});



router.delete('/:id', async (req, res, next) => {
    try {
      const livro = await livroDao.excluir(req.params.id); 
      if (livro) {
        return res.status(200)
      } else {
        return res.status(404)
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
