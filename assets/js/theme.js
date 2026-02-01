/**
 * Theme Toggle Logic
 * Handles Dark/Light mode switching with persistence.
 */

const themeConfig = {
    storageKey: 'theme',
    lightThemeClass: 'light-theme',
    iconSun: 'fa-sun',
    iconMoon: 'fa-moon'
};

const themeToggle = {
    init: () => {
        const storedTheme = localStorage.getItem(themeConfig.storageKey);
        // Default is dark, so if 'light' is stored, applying it.
        if (storedTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        // Wait for DOM to set button state
        document.addEventListener('DOMContentLoaded', themeToggle.setupButton);
    },

    setupButton: () => {
        const toggleBtns = document.querySelectorAll('.theme-toggle');

        toggleBtns.forEach(btn => {
            btn.addEventListener('click', themeToggle.switchTheme);
            themeToggle.updateIcon(btn);
        });
    },

    switchTheme: () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'dark';

        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            newTheme = 'dark';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            newTheme = 'light';
        }

        localStorage.setItem(themeConfig.storageKey, newTheme);

        // Update all buttons (desktop/mobile)
        const toggleBtns = document.querySelectorAll('.theme-toggle');
        toggleBtns.forEach(btn => themeToggle.updateIcon(btn));
    },

    updateIcon: (btn) => {
        const icon = btn.querySelector('i');
        const currentTheme = document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'light') {
            icon.classList.remove(themeConfig.iconMoon);
            icon.classList.add(themeConfig.iconSun);
        } else {
            icon.classList.remove(themeConfig.iconSun);
            icon.classList.add(themeConfig.iconMoon);
        }
    }
};

// Run immediately to prevent flash
themeToggle.init();
