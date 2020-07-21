$('.abrir-modal').click(function(){
    $('.modal').toggleClass('active');
    var condicao = $('.modal').hasClass('active');
    if(condicao){
        $(this).text('Fechar Modal');
    }else{
        $(this).text('Abrir Modal');
    }
});