addEventListener('DOMContentLoaded', () => {
    // Closing sidepanel 
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close'),
          sidePanel = document.querySelector('.sidepanel');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 385) {
            sidePanel.classList.add('sidepanel_dark');
        } else {
            sidePanel.classList.remove('sidepanel_dark');
        }
    });

    // State width of filled bar in rates
    const rate = document.querySelectorAll('.skills__rate-size'),
          filledBar = document.querySelectorAll('.skills__rate-bar_filled');

    rate.forEach((elem, i) => {
        filledBar[i].style.width = elem.textContent;
    });

});