/* Pega o valor ou define uma propriedade CSS*/
var psize = $('.modal-content').css('background-color' , '#FF0000');
console.log(psize);
/* Podemos definir mais de uma propriedade 
$('.modal').css({
    'background-color': 'blue',
    'width': '200px',
    'font-size': '30px',
});*/
/* Vamos criar uma função que não entendi ainda 
$(document).scroll(function(){
   var documentTop = $(this).scrollTop ();
   $('.modal').css('height', documentTop * 10);
});*/
/* Pegam ou definem o valor de height (width vai ser o mesmo) */
var height = $('.modal').height();
console.log(height)
/* Inner Height é a soma do Height + quanto se tem de padding */
var innerHeight = $('.modal').innerHeight();
console.log(innerHeight)
/* Outer Height é a soma do Height + quanto se tem de padding + valor das bordas */
var outerHeight = $('.modal').outerHeight(true);
console.log(outerHeight);

var windowHeight = $(window).height();
$('.modal').height(windowHeight);