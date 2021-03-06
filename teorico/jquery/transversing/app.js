/* Each funciona como um loop 
var numero = 0
$('a').each(function(){
    $(this).click(function(e){
        e.preventDefault();
        $(this).css('background' , 'blue');
    });
});*/
/* Closest seleciona o parent mais próximo de tal elemento 
$('h2').click(function(){
    $(this).closest('div').css('background' , 'blue');
});*/
/* Parent vai direto no elemento pai, posso passar 2 por exemplo, pra ir mais longe 
$('h2').click(function(){
    $(this).parent().parent().css('background' , 'blue');
});*/
/* Find procura o elemento dentro dos filhos 
$('section').click(function(){
    $(this).find('p').css('background' , 'blue');
});*/

//-------------Seleção única -----------------

/* First seleciona apenas o primeiro elemento 
$('.btn').first().css('background' , 'blue');*/
/* Last seleciona apenas o último elemento 
$('.btn').last().css('background' , 'blue');*/

//-------------Relacionados à posição-----------
/* Prev seleciona o elemento anterior 
$('.btn').prev().css('background' , 'pink');*/
/* Next seleciona o próximo elemento 
$('.btn').next().css('background' , 'pink');*/
/* Eq seleciona relacionado ao Index 
$('a').eq(1).css('background' , 'violet');*/
/* Not remove da seleção 
$('a').not('.abrir-modal').css('background' , 'pink');*/

//-------------------Os especiais------------------
/* Verifica se o documento está pronto/carregado para fazer as manipulações 
$(document).ready(function(){
    $('a').hide();
});*/

/* Data pega o valor de um atributo que comece com "data-" 
var velocidade = $('.abrir-modal').data('velocidade');
if(velocidade == 'slow'){
    $('a').slideUp(1000);
}else if(velocidade == 'fast'){
    $('a').slideUp(200);
}*/
/* Set Timeout adiciona um tempo de espera antes de executar a função*/
setTimeout(function(){
    $('a').css('background' , 'blue');
}, 2000);
setTimeout(function(){
    $('a').css('background' , 'green');
}, 4000);
setTimeout(function(){
    $('a').css('background' , 'purple');
}, 6000);