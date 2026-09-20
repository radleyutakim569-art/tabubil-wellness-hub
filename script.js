// Tabubil Wellness Hub JavaScript

console.log("Welcome to Tabubil Wellness Hub!");

// Automatically update the copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}