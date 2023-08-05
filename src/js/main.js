/*
    The code of nav toggle button was taken from this tutorial:
    https://www.freecodecamp.org/news/how-to-build-a-responsive-navbar-with-a-toggle-menu-using-flexbox-3438e1d08783/
*/

function toggleNavBar() {
    const navs = document.querySelectorAll('.nav-items')
    navs.forEach(nav => nav.classList.toggle('expanded'));
}
  
document.querySelector('.nav-toggler').addEventListener('click', toggleNavBar);