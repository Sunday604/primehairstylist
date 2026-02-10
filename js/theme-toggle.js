// Theme Toggle Functionality
// Apply theme immediately to prevent flash
(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

class ThemeToggle {
    constructor() {
        this.toggleButton = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Theme is already applied above, just update button
        this.updateButtonIcon();

        // Add event listener to toggle button
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        this.updateButtonIcon();
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateButtonIcon() {
        if (this.toggleButton) {
            this.toggleButton.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
            this.toggleButton.title = this.currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeToggle();
});