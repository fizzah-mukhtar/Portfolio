const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Use querySelectorAll to select all elements with the class "alternate-style"
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");

// Function to toggle between light and dark mode
function toggleMode() {
    const isDarkMode = document.body.classList.toggle("dark");
    const icon = dayNight.querySelector("i");

    if (isDarkMode) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

// Set initial mode based on localStorage
window.addEventListener("load", () => {
    const savedMode = localStorage.getItem("mode") || "dark";
    document.body.classList.toggle("dark", savedMode === "dark");
    const icon = dayNight.querySelector("i");

    if (savedMode === "dark") {
        icon.classList.add("fa-sun");
        icon.classList.remove("fa-moon");
    } else {
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
    }
});

dayNight.addEventListener("click", () => {
    toggleMode();
    // Save the current mode to localStorage
    const currentMode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("mode", currentMode);
});
