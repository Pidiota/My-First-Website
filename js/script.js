// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Menu di-klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// klik di luar sidebar untuk menghilangka  sidebar
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});