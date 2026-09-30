// ===============================
// TYPING ANIMATION
// ===============================

const typingText = [
    "Web Developer",
    "RPL Student",
    "Frontend Learner",
    "Creative Coder"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!deleting) {

        typing.textContent = currentText.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = currentText.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex === typingText.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Tutup menu setelah klik link

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .certificate-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";

    observer.observe(element);

});