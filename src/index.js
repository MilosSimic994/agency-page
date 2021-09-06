const hambMenu = document.querySelector('.hamburger')
const menu = document.querySelector('.main-nav')

function showMenu() {
    menu.classList.toggle('show')
}

hambMenu.addEventListener('click', showMenu)