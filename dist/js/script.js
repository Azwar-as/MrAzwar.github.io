<<<<<<< HEAD
// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const toTop = document.getElementById("toTop")
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')

    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

//Hamburger
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik diluar hamburger
window.addEventListener('click', (e) => {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// darkmode Toggle
const darkToggle = document.getElementById("dark-toggle")
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
    if (darkToggle.checked) {
<<<<<<< HEAD
      html.classList.add("dark")
        localStorage.theme = "dark"
    } else {
         html.classList.remove("dark")
=======
        html.classList.add("dark")
        localStorage.theme = "dark"
    } else {
        html.classList.remove("dark")
>>>>>>> 405c042 (first commit)
        localStorage.theme = "light"
    }
})

//Toggle swap
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
=======
// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;
    const toTop = document.getElementById("toTop")
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')

    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

//Hamburger
const hamburger = document.querySelector("#hamburger")
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik diluar hamburger
window.addEventListener('click', (e) => {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// darkmode Toggle
const darkToggle = document.getElementById("dark-toggle")
const html = document.querySelector('html')

darkToggle.addEventListener('click', () => {
    if (darkToggle.checked) {
        html.classList.add("dark")
        localStorage.theme = "dark"
    } else {
        html.classList.remove("dark")
        localStorage.theme = "light"
    }
})

//Toggle swap
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
>>>>>>> 9758282 (revision)
}