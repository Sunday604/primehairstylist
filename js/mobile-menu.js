// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');

if (hamburger && navbar) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
}

// Handle theme toggle button in mobile view
if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        // Close mobile menu if it's open when theme toggle is clicked
        if (hamburger && navbar) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        }
    });
}
