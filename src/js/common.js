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
		arrows: true,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$('.slick-sale').slick({
		infinite: true,
		slidesToShow: 4,
		arrows: true
	});

$(window).resize(function () { 
	removeClassCol();
});

var removeClassCol = function() {
	if (screen.width < 998) {
		$('#customcol-1').removeClass('custom-col-4');
		$('#customcol-2').removeClass('custom-col-8');
	}
	else {
		$('#customcol-1').addClass('custom-col-4');
		$('#customcol-2').addClass('custom-col-8');
	}
}

removeClassCol();
});