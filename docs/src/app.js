


const logo = document.getElementsByClassName('logo');
const info = document.getElementsByClassName('info');
const headshot = document.getElementsByClassName('headshot');
const projects = document.getElementsByClassName('project');


for (let i = 0; i < projects.length; i++) {
    if (i % 2 === 0) projects[i].classList.add('ActiveLeft');
    else projects[i].classList.add('ActiveRight');
}



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
        for (let i = 0; i < projects.length; i++) {
            if (i % 2 === 0) projects[i].classList.add('ActiveLeft');
            else projects[i].classList.add('ActiveRight');
        }

    }
    else if (document.documentElement.scrollTop >= info[0].getBoundingClientRect().bottom) {
        info[0].classList.add('active');
        headshot[0].classList.add('active');
    }
    for (let i = 0; i < projects.length; i++) {
        if (document.documentElement.scrollTop >= projects[i].getBoundingClientRect().bottom) {
            if (i % 2 === 0) projects[i].classList.remove('ActiveLeft');
            else projects[i].classList.remove('ActiveRight');
        }

    }
}

