/* Pega o valor ou define uma propriedade CSS
var psize = $('.modal-content').css('background-color' , '#FF0000');
console.log(psize);*/
/* Podemos definir mais de uma propriedade 
$('.modal').css({
    'background-color': 'blue',
    'width': '200px',
    'font-size': '30px',
});*/
/* Vamos criar uma função que não entendi ainda 
$(document).scroll(function(){
   var documentTop = $(this).scrollTop ();
   $('.modal').css('height', documentTop);
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

//var windowHeight = $(window).height();
//$('.modal').height(windowHeight);

/* Retorna um objeto com as distâncias de top e left do elemento em relação ao documento 

var offset = $('.modal').offset().left;
console.log(offset);*/

/* Definir coordenadas de top e left */
$('.modal').offset({top: 200 , left: 300 });

/* Pega o topo do elemento em relação ao seu scroll */
$(window).scroll(function(){
    var scrollTop  = $(this).scrollTop();
    console.log(scrollTop);
});

/*  */
$('.btn').click(function(e){
    e.preventDefault();
    $(window).scrollTop(0);
})