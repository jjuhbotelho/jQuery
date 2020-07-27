function calcularAreaQuadrado (lado){
    var area = lado * lado;
    return area;
}

console.log(calcularAreaQuadrado(4));

function calcularImc(peso, altura){
    var imc = peso / (altura * altura);
    return imc;
}

console.log(calcularImc(54, 1.68));

function precisoVisitar(paisesVisitados){
    var totalPaises = 200;
    var faltam = totalPaises - paisesVisitados;
    console.log("Faltam " + faltam + " para você visitar");
}

precisoVisitar(1);

var custoDoCarro = function(portas){
    var precoInicial = 100000;
    if(portas){
        return portas * precoInicial;
    } else {
        return 2 * precoInicial;
    }
}

console.log(custoDoCarro());