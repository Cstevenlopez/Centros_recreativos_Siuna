var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click',function(){
   nav.classList.toggle('muestrate');
})


const buttonPrev = document.getElementById('button-prev');
const regresar = document.getElementById('regresar');
const buttonNext = document.getElementById('button-next');
const siguiente = document.getElementById('siguiente');
const track = document.getElementById('track');
const tac = document.getElementById('tac');
const slickList = document.getElementById('slick-list');
const slilistackList = document.getElementById('lista');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}