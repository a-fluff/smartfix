
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    },500);
}

var menu = document.querySelector('.menu');
var open = false;

document.querySelector('.burger').onclick = function(){
    if(open){
        menu.classList.remove('menu--open');
    }else{
        menu.classList.add('menu--open');
    }

    open = !open;
};



document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
})



let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);