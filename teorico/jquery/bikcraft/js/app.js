/* -----------Inserção Inside---------------- */

/*Adiciona o conteúdo no html, local primeiro, conteúdo depois*/
$('p').append(' <span>Adiciona ao Final</span>');
$('h2').append(' ISSO AQUI É UM H2');
$('p').append($('.introducao h1'));

/*Também adiciona o conteúdo, mas o conteúdo vem antes do local
$('<p>Adicionar P</p>').appendTo('ul');*/
/*Aqui o conteúdo vai ser substituído e vai renderizar o HTML - Pra selecionar, seleciona o primeiro, para substituir, substitui todos*/
$('h2').html('Teste');
/*Aqui o conteúdo também vai ser substituído, porém o HTMl não renderiza
$('p').text('<h2>Oi</h2>');*/
 
/* -----------Inserção Outside---------------- */

$('p').after('<span> >Finge que ta bonito </span>');

$('<span>OI</span>').insertBefore('h2');

/*Envolve o elemento selecionado com a tag escolhida.
$('p').wrap('<div class="azul"></div>');*/
/*Remover o elemento pai do item selecionado
$('li p').unwrap();
*/ 
