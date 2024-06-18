const Livro = require("./livro-schema");

const obterLivros = async () => {
    try {
        const livros = await Livro.find();
        return livros;
    } catch (err) {
        throw err;
    }
};

const incluir = async (livro) => {
    try {
         // verifica se o livro está no banco de dados 
         const buscaLivro = await Livro.findOne({ codigo: livro.codigo });
         if (buscaLivro) {
             livro.codigo += 1; 
             return await incluir(livro)
         }

        const novoLivro = await Livro.create(livro);
        return novoLivro;
    } catch (err) {
        throw err;
    }
};

const excluir = async (codigo) => {
    try {
        const resultado = await Livro.deleteOne({ _id: codigo });
        return resultado;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    obterLivros,
    incluir,
    excluir
};
