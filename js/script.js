$(document).ready(function(){
	
	$('.catalogue__slider').slick({
		arrows:true,
		dots:true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed:500,
		easing:'ease',		
		infinite:true,
		initialSlide: 1,
		draggable: false,
		touchThreshold: 10,
		waitForAnimate: true,
		variableWidth: false,
		//responsive: [{
		//	breakpoint: 1200,
		//	settings: {
		//		slidesToShow: 3
		//	}		
		//}]
	});
	

	$('.categories__item').mouseenter(function (e){
		e.target.childNodes[1].classList.add('categories__image_active');		
		//e.stopPropagation();
	});
	$('.categories__item').mouseleave(function (e){
		e.target.childNodes[1].classList.remove('categories__image_active');		
		//e.stopPropagation();
	});
	$('.header-burger__burger').click(function (e){
		$('.header-burger__navmenu').toggleClass(' header-burger__navmenu-active');
	})

});