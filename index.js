const hiddenNavbar = document.querySelectorAll('.hidden-navbar')[0]
const hamburgerOpen = document.querySelectorAll('.hamburger-icon')[0]
const hamburgerClose = document.querySelectorAll('.hamburger-icon-close')[0]
// if(document.body.clientWidth > 600) {
//     document.querySelectorAll('.mobile')[0].style.display = 'none'
//     document.querySelectorAll('.desktop')[0].style.display = 'block'
//     console.log(document.body.clientWidth);
// }
hamburgerOpen.addEventListener('click', function () {
    hamburgerClose.style.display = 'block'
    hamburgerOpen.style.display = 'none'
    setTimeout(function () {
        hiddenNavbar.style.display = 'block'
    }, 0)
    hiddenNavbar.animate([
        { opacity: `0` },
        { opacity: `1` }
    ],
        {
            duration: 400
        })
})
hamburgerClose.addEventListener('click', function () {
    hamburgerClose.style.display = 'none'
    hamburgerOpen.style.display = 'block'
    setTimeout(function () {
        hiddenNavbar.style.display = 'none'
    }, 0)
})