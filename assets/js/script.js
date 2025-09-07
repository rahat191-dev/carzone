document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            const hamburger = document.getElementById("hamburger");
            const menu = document.getElementById("hamburger-menu");

            hamburger.addEventListener("click", () => {
              menu.classList.toggle("active");
            });
        });
});