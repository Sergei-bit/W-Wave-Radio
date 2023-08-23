document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("header__nav-open");
        document.querySelector("header").classList.toggle("header__menu-lower-open");
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-login-link").addEventListener("click", function() {
        document.querySelector("header").classList.add("header__registration-form-open")
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-close-btn").addEventListener("click", function() {
        document.querySelector("header").classList.remove("header__registration-form-open")
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header-accordion-btn").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("header__accordion-open")
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("podcasts-btn").addEventListener("click", function() {
        document.querySelector("main").classList.toggle("podcasts__additional-open")
    })
})

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("broadcast-dropdown").addEventListener("click", function() {
        document.querySelector("main").classList.toggle("broadcast__dropdown-open")
    })
})