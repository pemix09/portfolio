


const logo = document.getElementsByClassName('logo');


setTimeout(() => {    logo[0].classList.toggle('rotateClockWise')}, 200);

logo[0].addEventListener('click',Rotate);
logo[0].addEventListener('hover',Rotate);

function Rotate()
{
    console.log('rotate');
    logo[0].classList.toggle('rotateClockWise');

}