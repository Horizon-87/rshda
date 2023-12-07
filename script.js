const menuIcon = document.querySelector(".menu-icon");
const alanding = document.querySelector(".landing");
const hea = document.querySelector(".header");

menuIcon.addEventListener("click", () => {
    alanding.classList.toggle("change")
    hea.hidden = true;
})