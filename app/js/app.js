document.addEventListener("DOMContentLoaded", function() {

	$('.doctors__slider').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		outline: false,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
		]
  });

});
