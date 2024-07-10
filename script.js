// Function to toggle between dark mode and light mode
function toggleModeMain() {
    let body = document.getElementById("body");
    let content = document.getElementById("dark-mode-toggle");
    let currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    if (currentMode === 'light') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        content.innerHTML = "Light Mode ☀︎";
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        content.innerHTML = "Dark Mode ☾";
        localStorage.setItem('mode', 'light');
    }
}

// Function to load the saved mode from local storage
function loadMode() {
    let savedMode = localStorage.getItem('mode');
    let body = document.getElementById("body");
    let content = document.getElementById("dark-mode-toggle");

    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        content.innerHTML = "Light Mode ☀︎";
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        content.innerHTML = "Dark Mode ☾";
    }
}

// Load the mode when the page loads
window.onload = loadMode;
