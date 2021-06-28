// CACHING THE DOM
const toggleBtn = document.querySelector("#toggle-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu")

toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
})