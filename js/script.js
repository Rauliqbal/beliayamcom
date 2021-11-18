let cart = document.querySelector(".shopping-cart-container");

document.querySelector("#cart-btn").onclick = () => {
    cart.classList.toggle("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
};

let login = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
    login.classList.toggle("active");
    cart.classList.remove("active");
    navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    login.classList.remove("active");
    cart.classList.remove("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
};

// let preloader = document.querySelector(".loader");
// window.addEventListener("load", function () {
//     preloader.style.display = "none";
// });

var loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.style.height = "100px";
    loader.style.width = "100px";
    loader.style.borderRadius = "50%";
    loader.style.visibility = "hidden";
});
