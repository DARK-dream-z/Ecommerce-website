// Active Navbar Finder
const navLinkELs = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkELs.forEach(navLinkELs => {
    const navLinkPathname = new URL (navLinkELs.href).pathname;

    if ((windowPathname === navLinkPathname)  || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLinkELs.classList.add('active');
    }
})