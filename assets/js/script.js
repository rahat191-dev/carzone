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

            // Login and Sign Up modal functionality
            const signUpModal = document.getElementById('signup-modal');
            const signUpBtn = document.getElementById('signup-btn');
            if (signUpBtn) {
                signUpBtn.addEventListener('click', () => {
                    signUpModal.style.display = 'block';
                });
            }

            const loginModal = document.getElementById('login-modal');
            const loginBtn = document.getElementById('login-btn');
            if (loginBtn) {
                loginBtn.addEventListener('click', () => {
                    loginModal.style.display = 'block';
                });
            }
        });
});