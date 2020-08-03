$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

/* ----------------- Scroll Suave ----------------- */
$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		menuHeight = $('.menu').innerHeight()
		targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

/* ----------------- Scroll de Volta pro Topo ----------------- */
$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500);
});

$('section').each(function(){
	var height = $(this).height(),
		offsetTop = $(this).offset().top,
		menuHeight = $('.menu').innerHeight(),
		id = $(this).attr('id'),
		$itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(offsetTop < scrollTop && offsetTop + height - menuHeight > scrollTop){
			$itemMenu.addClass('active');
		}else {
			$itemMenu.removeClass('active');
		}
	});
});