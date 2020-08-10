//Debounce do Lodash

debounce = function(func, wait, immediate){
    var timeout;
    return function(){
        var context = this, args = arguments;
        var later = function(){
            if (!immediate) func.apply(context , args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

/* -------------------- Mudar Tab ao Click ---------------------- */

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

//Mudar o que ta ativo no menu de acordo com a área
$('section').each(function(){
	var height = $(this).height(),
		offsetTop = $(this).offset().top,
		menuHeight = $('.menu').innerHeight(),
		id = $(this).attr('id'),
		$itemMenu = $('a[href="#' + id + '"]');
	
	$(window).scroll(debounce(function(){
		var scrollTop = $(window).scrollTop();
		if(offsetTop < scrollTop && offsetTop + height - menuHeight > scrollTop){
			$itemMenu.addClass('active');
		}else {
			$itemMenu.removeClass('active');
		}
	}, 200));
});

/* ------------------------------------- Botão Mobile ---------------------------------------- */

$('.mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active');
});


/*------------------------------------- Slide -------------------------------------*/
(function(){
	function slider(sliderName , velocidade){
		var sliderClass = '.' + sliderName,
			activeClass = 'active',
			rotate = setInterval(rotacionarSlide, velocidade);

		$(sliderClass + ' > :first').addClass(activeClass);
		$(sliderClass).hover(function(){
			clearInterval(rotate);
		}, function(){
			rotate = setInterval(rotacionarSlide, velocidade);
		});

		function rotacionarSlide() {
			var activeSlide = $( sliderClass + '> .' + activeClass),
				nextSlide = activeSlide.next();

				if(nextSlide.length == 0){
					nextSlide = $(sliderClass + ' > :first');
				}
				activeSlide.removeClass(activeClass);
				nextSlide.addClass(activeClass);
		}

	}
	slider('introducao' , 500);
})();

//Animação dos botões de menu com Scroll
(function(){
	var $target = $('[data-anime="scroll"]'),
		animationClass = 'animate',
		offset = $(window).height() * 3/4; 

	function animeScroll(){
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;

			if (documentTop > itemTop - offset){
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}	
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 200));
})();

