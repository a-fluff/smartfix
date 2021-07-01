var menu = document.querySelector('.menu');
var open = false;

document.querySelector('.burger-box').onclick = function(){
    if(open){
        menu.classList.remove('menu--open');
    }else{
        menu.classList.add('menu--open');
    }

    open = !open;
};

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
    }, 4000);
}