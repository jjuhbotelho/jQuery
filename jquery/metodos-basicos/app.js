/* Traz o primeiro atributo selecionado ou ao passar mais um parametro, atribui valor a todos os atributos */
var href = $('img').attr('alt' , 'Imagem Castelos');
console.log(href);
/* Remove o atributo */
$('img').removeAttr('src');

/* Aqui estamos armazenando o valor digitado em um input em botão ao clicar em enviar */
$('#botao').click(function(){
    var nome = $('.nome').val();
    $('.btn').text(nome);
});
/* Remove 
$('.btn').click(function(){
    $('input').remove();    
});*/

$('a').click(function(){
    $('.modal').empty();    
});

