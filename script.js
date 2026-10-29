/* ===========================
   ROYAL BITES PREMIUM JS
=========================== */

// ================= HERO SLIDER =================

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

// ================= SCROLL TOP =================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================= SMOOTH NAVIGATION =================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }

    });

});

// ================= HEADER SCROLL =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0f172a";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";

        header.style.boxShadow = "none";

    }

});

// ================= BOOKING FORM =================

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🎉 Booking Successful!\n\nThank you for choosing Royal Bites.");

        bookingForm.reset();

    });

}

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("📩 Message Sent Successfully!");

        contactForm.reset();

    });

}

// ================= COUNTER ANIMATION =================

const counters = document.querySelectorAll(".counter-grid h2");

let started = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const top = counterSection.offsetTop - window.innerHeight;

    if (window.scrollY > top && !started) {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

        started = true;

    }

});

// ================= FADE ANIMATION =================

const cards = document.querySelectorAll(
    ".feature-card,.room-card,.menu-card,.gallery-grid img,.testimonial-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = ".6s";

    observer.observe(card);

});

// ================= YEAR =================

const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}

console.log("Royal Bites Premium Website Loaded Successfully 🚀");