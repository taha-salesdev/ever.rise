/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText.replace(/,/g, "");
        const increment = Math.max(1, Math.ceil(target / 80));

        if (current < target) {
            const next = Math.min(current + increment, target);
            counter.innerText = next.toLocaleString();
            setTimeout(updateCounter, 18);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    updateCounter();
});


/* =========================
   HAMBURGER MENU
========================= */

const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector("nav ul");

if (hamburger && navUl) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navUl.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navUl.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            navUl.classList.remove("open");
        });
    });
}


/* =========================
   SMOOTH NAV ACTIVE STATE
========================= */

const links = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});


/* =========================
   COPY DONATION DETAILS
========================= */

function copyText(id) {
    const text = document.getElementById(id).innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(`button[onclick="copyText('${id}')"]`);
        if (btn) {
            const original = btn.innerText;
            btn.innerText = "Copied!";
            btn.style.background = "#1e88e5";
            setTimeout(() => {
                btn.innerText = original;
                btn.style.background = "";
            }, 2000);
        }
    });
}


/* =========================
   CONSOLE LOG
========================= */

console.log("Ever Rise NGO Website Loaded Successfully 🚀");
