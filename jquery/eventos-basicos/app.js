/*Adiciona uma função ao clicar no alvo

$('a').click(function(){
    $('a').text('Clicou');
});*/

/*Os eventos podem ser escritos com on*/
$('a').on('click', function(e){
    e.preventDefault();
    var current = $(this);
    current.text('Clicou');
});

/*Primeira etapa do hover, quando o mouse entra no alvo*/
$('a').on('mouseenter', function(e){
    e.preventDefault();
    $('a').text('Mouse Hover');
});
/*Segunda etapa do hover, quando o mouse sai do alvo*/
$('a').on('mouseleave', function(e){
    e.preventDefault();
    $('a').text('Abrir Modal');
});
/*Scroll
$(document).on('scroll', function(e){
    $('a').text($(document).scrollTop());
});*/
/*Resize*/
$(window).on('resize', function(e){
    $('a').text($('body').width());
});


