// var menu = document.querySelector('.menu');
// var open = false;


// document.querySelector('.burger-box').onclick = function(){
//     if(open){
//         menu.classList.remove('menu--open');
//     }else{
//         menu.classList.add('menu--open');
//     }

//     open = !open;
// };

// var burgerBox = document.querySelector('.burger-box--closed');
// var menu = document.getElementsByClassName('.menu');

// burgerBox.onclick = function () {
//     menu.classList.toggle('open');
// }


// $(document).ready(function() {
//     $('.burger-box--closed').click(function(event) {
//         $('.burger-box, .menu').toggleClass('active');
//     });
// });

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    },500);
}

// $(document).ready(function() {
//     let position = 0;
//     const slidesToShow = 3;
//     const slidesToScroll = 2;
//     const container = $('.slider__container');
//     const track = $('.slider__list');
//     const item = $('.slider__item');
//     const btnPrev = $('.previous');
//     const btnNext = $('.next');
//     const itemWidth = container.wisth() / slidesToShow;

//     item.each(function (index, item) {
//         $(item).css({
//             minWidth: itemWidth,
//         });
//     });
// });



// $(document).ready(function () {
// 	$(".icons").slick({
// 		//Basic settings
// 		autoplay: true,
// 		autoplaySpeed: 400000,
// 		arrows: true,
// 		swipeToSlide: true,
// 		touchMove: true,
// 		ltr: true,
// 		infinite: true,
// 		variableWidth: true,
// 		dots: false,
// 		pauseOnHover: false
// 	});
// });


