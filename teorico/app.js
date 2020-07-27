var x = 30;
x = x + 40;
x += 40;
var y = 70;
var resultado = x + x - x * y / x;

console.log(resultado);

var primeiroNome = "Júlia";
var ultimoNome = "Botelho";
var nomeCompleto = primeiroNome + " " + ultimoNome

console.log(nomeCompleto);

var array = [1 , 2 , 3 ,'Leozinho Ursinho'];

var adicionar = array.push('Soren cade meu Video');

var buscarArray = array.indexOf(1);
var removerArray = array.splice(3,1);
var tamanhoArray = array.length;

console.log(array);
console.log(array[tamanhoArray - 1] , buscarArray);
console.log(tamanhoArray);

var saiuVideo = true;

if (saiuVideo){
    console.log("Vai assistir o meu vídeo no link (https://www.youtube.com/watch?v=y5JI_hF6GcY)");
}else{
    console.log("Soren, cade meu video?");
}