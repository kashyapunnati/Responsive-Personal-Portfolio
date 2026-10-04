const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.style.color = "#f87171";
        return;
    }

    if (!isValidEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#f87171";
        return;
    }

    formMessage.textContent = "Message submitted successfully!";
    formMessage.style.color = "#86efac";

    contactForm.reset();
});

function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}