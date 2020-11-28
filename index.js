const hiddenNavbar = document.querySelector('.hidden-navbar');
const hamburgerOpen = document.querySelector('.hamburger-icon');
const hamburgerClose = document.querySelector('.hamburger-icon-close');

hamburgerOpen.addEventListener('click', () => {
    hamburgerClose.style.display = 'block';
    hamburgerOpen.style.display = 'none';
    hiddenNavbar.style.display = 'block';

    hiddenNavbar.animate([
        { opacity: `0` },
        { opacity: `1` }
    ],
        {
            duration: 400
        });
});

hamburgerClose.addEventListener('click', function () {
    hamburgerClose.style.display = 'none';
    hamburgerOpen.style.display = 'block';
    hiddenNavbar.style.display = 'none';
})