// Set max date to today's date in the input
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

// Function to calculate age
function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3, m3, d3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

// Helper function to get days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Theme toggle function
function toggleTheme() {
    let container = document.querySelector(".container");
    
    if (container.classList.contains("light-theme")) {
        container.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark");
    } else {
        container.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme
window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.querySelector(".container").classList.add(savedTheme + "-theme");
};
