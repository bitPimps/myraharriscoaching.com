// 1. Import the custom SCSS file. Vite processes this into CSS.
import './scss/custom.scss';

// 2. Import the entire Bootstrap JS bundle (includes Popper for tooltips/popovers)
import * as bootstrap from 'bootstrap';

// You can now write your custom JavaScript logic here
console.log('Bootstrap 5 is loaded and customized.');

// Example: Initialize all tooltips
document.addEventListener('DOMContentLoaded', () => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear();
});
