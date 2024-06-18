const banco = require("mongoose");

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};


banco.connect("mongodb://localhost:27017/livraria", options)
    .then(() => {
        console.log("Conectado");
    })
    .catch(error => {
        console.error("Erro ao conectar", error);
    });

module.exports = banco;