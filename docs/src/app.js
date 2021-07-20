const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
    console.log('click');
    hamburgerButton.classList.toggle('show');
    hamburgerButton.classList.toggle('notActive');
}

hamburgerButton.addEventListener('click',toggleButton)