$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		// autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
		pauseOnFocus:false,
		pauseOnHover:false,

		responsive:[
			{
				breakpoint: 800,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow:1,
					variableWidth:true
				}
			}
		],
		// mobeileFirst:true
	});
});

