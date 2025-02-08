document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu");
    const closeIcon = document.getElementById("close");
    const navLinks = document.querySelector(".links");

    menuIcon.addEventListener("click", function () {
        navLinks.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "inline";
    });

    closeIcon.addEventListener("click", function () {
        navLinks.style.display = "none";
        closeIcon.style.display = "none";
        menuIcon.style.display = "inline";
    });
});