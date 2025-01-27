const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
    links.classList.add("active");
})

close.addEventListener("click", () => {
    links.classList.remove("active");
})