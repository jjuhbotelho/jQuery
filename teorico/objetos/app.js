var julia = {
    nome: "Julia",
    profissao:"Não sei streamer, dev, scrum master, desempregada?",
    empresa: "to desempregada",
    idade: 19
};

console.log(julia.profissao);

var quadrado = {
    totalDeLados: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function(lado){
        return lado* this.totalDeLados;
    }
}

console.log(quadrado.perimetro(20));

var carro = {
    modelo: "Audi",
    portas: 4
}