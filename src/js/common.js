$(document).ready(function () {

	$('.slick-slider').slick({
		dots: true,
		arrows: false
	});

	$('.slick-banner-slider').slick({
		dots: true,
		arrows: false
	});

	$('.slick-product').slick({
		infinite: true,
		slidesToShow: 5,
		arrows: true
	});

		$('.slick-sale').slick({
		infinite: true,
		slidesToShow: 4,
		arrows: true
	});

    
});