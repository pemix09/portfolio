


const logo = document.getElementsByClassName('logo');
const info = document.getElementsByClassName('info');
const headshot = document.getElementsByClassName('headshot');


setTimeout(() => { logo[0].classList.toggle('rotateClockWise') }, 200);

logo[0].addEventListener('click', Rotate);
document.addEventListener('scroll', Move);

function Rotate() {
    console.log('rotate');
    logo[0].classList.toggle('rotateClockWise');

}
function Move() {
    if (document.documentElement.scrollTop < 50) {
        info[0].classList.remove('active');
        headshot[0].classList.remove('active');
    }
    else if (document.documentElement.scrollTop >= info[0].getBoundingClientRect().bottom) {
        info[0].classList.add('active');
        headshot[0].classList.add('active');
    }
}

