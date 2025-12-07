/* ---------------------------------------------------
   AJ MART – Animations & UI Interaction Script
--------------------------------------------------- */

/* ========= Smooth Fade-in for Product Cards ========= */

function animateCards() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "0.4s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 40);
    });
}

/* ========= Debounced Search (smooth typing) ========= */

let searchTimeout = null;

document.getElementById("search").addEventListener("input", () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        renderProducts();
        animateCards();
    }, 200);
});

/* ========= Category Buttons Animated Interaction ========= */

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("cat-btn")) {
        window.scrollTo({ top: 200, behavior: "smooth" });
        setTimeout(() => {
            animateCards();
        }, 150);
    }
});

/* ========= Sticky Header Shadow Animation ========= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.boxShadow = "0 6px 18px rgba(0,0,0,0.45)";
        header.style.transition = "0.3s ease";
    } else {
        header.style.boxShadow = "none";
    }
});

/* ========= Run on page load ========= */

document.addEventListener("DOMContentLoaded", () => {
    animateCards();
});
