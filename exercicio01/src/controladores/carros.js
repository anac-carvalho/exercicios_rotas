const carros = require("../dados");

//listagemCarros
const filtrarCarro = (req, res) => {
    const { marca, cor } = req.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        });
    }
    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        });
    }


    res.send(resultado);

    // const { id } = req.query;
    // let resultado = carros;

    // console.log("cheguei no controlador de listagem do carros");

    // if (id) {
    //     resultado = carros.filter((carros) => {
    //         return carros.id === id
    //     });
    // }

    // res.send(resultado);
}
//obterCarro
const encontrarUmCarro = (req, res) => {
    const { id } = req.params;
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id);
    });
    // console.log("rota para encontrar um carro");
    // const carroEncontrado = carro.find((carro) => {
    //     return carro.id === Number(req.params.id)
    // });
    res.send(carroEncontrado);
}


module.exports = {
    filtrarCarro,
    encontrarUmCarro,
    //  novoControlador
};