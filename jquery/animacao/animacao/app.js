/* Cria uma animação, e após podemos passar u novo parâmetro para velocidade */
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
});

