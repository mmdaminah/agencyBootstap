const navbar = document.querySelector('.nav');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
};