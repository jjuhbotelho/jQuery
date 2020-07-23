/* Cria uma animação, e após podemos passar um novo parâmetro para velocidade
$('a').click(function(){
    $('.modal')
    .animate({
        fontSize: 20,
        borderTopWidth: 200,
        borderBottomWidth: 200,
    }, 1000, 'linear')
    .animate({
        height:300
    }, 1200);
});*/ 

/* Fade out tira a opacidade do elemento e aplica display:none 
$('.btn').click(function(){
    $('.modal').fadeOut();
});
$('.abrir-modal').click(function(){
    $('.modal').fadeIn();
});*/
/* Hide esconde o elemento no canto 
$('.btn').click(function(){
    $('.modal').hide(500);
});
$('.abrir-modal').click(function(){
    $('.modal').show(500);
});*/
/* Slide Up sobe desaparecendo, Slide Down desce aparecendo
$('.btn').click(function(){
    $('.modal').slideUp(500);
});
$('.abrir-modal').click(function(){
    $('.modal').slideDown(500);
});*/
$('a').click(function(){
    $('.modal').slideToggle(function(){
        $('a').click();
    });
});