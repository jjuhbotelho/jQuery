/* Each funciona como um loop */
var numero = 0
$('a').each(function(){
    $(this).click(function(e){
        e.preventDefault();
        $(this).css('background' , 'blue');
    });
});
/* Closest seleciona o parent mais próximo de tal elemento 
$('h2').click(function(){
    $(this).closest('div').css('background' , 'blue');
});*/
/* Parent vai direto no elemento pai, posso passar 2 por exemplo, pra ir mais longe 
$('h2').click(function(){
    $(this).parent().parent().css('background' , 'blue');
});*/
/* Findo procura o elemento dentro dos filhos */
$('section').click(function(){
    $(this).find('p').css('background' , 'blue');
});