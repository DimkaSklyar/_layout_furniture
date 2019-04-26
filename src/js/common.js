
	function AjaxFormRequest(result_id,formMain,url) { 
		jQuery.ajax({ 
			url: url, 
			type: "POST", 
			dataType: "html", 
			data: jQuery("#"+formMain).serialize(), 
			success: function(response) { 
				$("#"+result_id).append(response); 
				$(':input','#'+formMain) 
				.not(':button, :submit, :reset, :hidden') 
				.val('') 
				.removeAttr('checked') 
				.removeAttr('selected');
				setTimeout(() => {
					$("#message").hide();
				}, 5000);
			}, 
			error: function(response) { 
				var par = document.getElementById(result_id);
				var error = document.createElement('span');
				error.classList.add("mt-3");
				error.innerHTML = "Возникла ошибка при отправке формы.";
				if (result_id != 'messegeResult-sub'){
					par.appendChild(error);
				}
			} 
		}); 
	}

	function AjaxFormRequest_1(result_id,formMain,url) { 
		jQuery.ajax({ 
			url: url, 
			type: "POST", 
			dataType: "html", 
			data: jQuery("#"+formMain).serialize(), 
			success: function(response) { 
				$(':input','#'+formMain) 
				.not(':button, :submit, :reset, :hidden') 
				.val('') 
				.removeAttr('checked') 
				.removeAttr('selected');
				setTimeout(() => {
					$("#message").hide();
				}, 5000);
			}, 
			error: function(response) { 
				var par = document.getElementById(result_id);
				var error = document.createElement('p');
				error.classList.add("mt-3");
				error.innerHTML = "Возникла ошибка при отправке формы.";
				if (result_id != 'messegeResult-sub'){
					par.appendChild(error);
				}
			} 
		}); 
	}

	$('#form-callback').submit(function(e){
		e.preventDefault();
		AjaxFormRequest('messegeResult-callback','form-callback','./callback.php');
	});
	$('#form-main-order').submit(function(e){
		e.preventDefault();
		AjaxFormRequest('messegeResult-order','form-main-order','./order.php');
	});

	$('#subscribe-form').submit(function(e){
		e.preventDefault();
		AjaxFormRequest_1('subscribe-form','subscribe-form','./subscribe.php');
	});

	$('#feedback').submit(function(e){
		e.preventDefault();
		AjaxFormRequest('messegeResult-feedback','feedback','./feedback.php');
	});
	
	window.addEventListener("DOMContentLoaded", function() {
		function setCursorPosition(pos, elem) {
			elem.focus();
			if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
			else if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.collapse(true);
				range.moveEnd("character", pos);
				range.moveStart("character", pos);
				range.select()
			}
		}
		
		function mask(event) {
			var matrix = "+7 (___) ___ __ __",
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
			if (def.length >= val.length) val = def;
			this.value = matrix.replace(/./g, function(a) {
				return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
			});
			if (event.type == "blur") {
				if (this.value.length == 2) this.value = ""
			} else setCursorPosition(this.value.length, this)
		};
		var input = document.querySelector("#phone");
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		var input2 = document.querySelector("#phone-1");
    input2.addEventListener("input", mask, false);
    input2.addEventListener("focus", mask, false);
    input2.addEventListener("blur", mask, false);
	});





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

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

$('#pay').click(function () { 
	$('.order-form').addClass('active');
	var price = $('#price').text().replace(/ +/g, "");
	var count = $('#quanty').val();
	var sum = +price * +count;
	var sum2 = sum.toString().split('');
	sum2.splice(sum2.length-3,0," ");
	sum = sum2.join('');
	$('#quality').text($('#quanty').val());
	$('#sum').text(sum);
	$('#price-order').val(price);
	$('#count-order').val(count);
	$('#sum-order').val(sum);
	$('#name-order').val($('#product-name').text());
	$('.close').removeClass('close-active');
});

$('.mfp-close').click(function () { 
	$('.order-form').removeClass('active');
});

$('.close').click(function () { 
	$('.order-form').removeClass('active');
	$(this).addClass('close-active');
	
});

$("a[href='#small-dialog']").click(function () {
	$("#price").text($(this).closest(".banner-txt").find(".price").text());
	$("#quanty").val(1);
	$("#product-img").attr("src",  $(this).closest(".banner-product__item").find("#hidden-img").attr("src"));

	$("#product-name").text($(this).closest(".banner-txt").find("h3").text());
	$("#description-1").text($(this).closest(".banner-txt").find(".d-1").text())
	$("#description-2").text($(this).closest(".banner-txt").find(".d-2").text())
});

$(".banner-order").click(function () {
	$("#price").text($(this).closest(".banner-txt").find(".price").text());
	$("#quanty").val(1);
	$("#product-img").attr("src",  $(this).closest(".banner-product__item").find(".hidden-img").attr("src"));
	$("#product-name").text($(this).closest(".banner-txt").find(".title").text());
	$("#description-1").text($(this).closest(".banner-txt").find(".d-1").text())
	$("#description-2").text($(this).closest(".banner-txt").find(".d-2").text())
});

$(".main-order").click(function () {
	$("#price").text($(this).closest(".product__item-wrapper").find(".price-product").text());
	$("#quanty").val(1);
	$("#product-img").attr("src",  $(this).closest(".product__item-wrapper").find("img").attr("src"));
	$("#product-name").text($(this).closest(".product__item-wrapper").find(".title").text());
	$("#description-1").text($(this).closest(".product__item-wrapper").find(".d-1").text())
	$("#description-2").text($(this).closest(".product__item-wrapper").find(".d-2").text())
});

$(".sale-order").click(function () {
	$("#price").text($(this).closest(".sale-product-wrap").find(".price").text());
	$("#quanty").val(1);
	$("#product-img").attr("src",  $(this).closest(".sale-product-wrap").find("img").attr("src"));
	$("#product-name").text($(this).closest(".sale-product-wrap").find(".name-product").text());
	$("#description-1").text($(this).closest(".sale-product-wrap").find(".d-1").text())
	$("#description-2").text($(this).closest(".sale-product-wrap").find(".d-2").text())
});

$(".min-order").click(function () {
	$("#price").text($(this).closest(".product-item").find(".price").text());
	$("#quanty").val(1);
	$("#product-img").attr("src",  $(this).closest(".product-item").find("img").attr("src"));
	$("#product-name").text($(this).closest(".product-item").find(".product-name").text());
	$("#description-1").text($(this).closest(".product-item").find(".d-1").text())
	$("#description-2").text($(this).closest(".product-item").find(".d-2").text())
});

});


