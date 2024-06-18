const banco = require("./conexao");

const LivroSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId, 
    titulo: {
        type: String,
        required: true
    },
    codEditora: {
        type: Number,
        required: true
    },
    resumo: {
        type: String,
        required: true
    },
    autores: {
        type: [String],
        required: true
    }
});

const Livro = banco.model("Livro", LivroSchema);

module.exports = Livro;
