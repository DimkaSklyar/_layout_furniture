$(document).ready(function () {



    var touch = $('#touch-menu');
    var menu = $('.top-nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
	});
	

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
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
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
		arrows: true,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
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


	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


});