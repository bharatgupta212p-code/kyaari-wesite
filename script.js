function openBookingForm() {
    document.getElementById("booking-form")
        .scrollIntoView({ behavior: "smooth" });
}

function sendBooking() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let guests = document.getElementById("guests").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let message = document.getElementById("message").value;

    let whatsappMessage =
        `New Table Reservation

Name: ${name}
Phone: ${phone}
Guests: ${guests}
Date: ${date}
Time: ${time}

Special Request: ${message}`;

    let url =
        `https://wa.me/918448657574?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
}
let currentImage = 1;

function openMenu() {
    document.getElementById("menuPopup").style.display = "block";
}

function closeMenu() {
    document.getElementById("menuPopup").style.display = "none";
}

function nextImage() {

    if (currentImage < 9) {
        currentImage++;
    }

    document.getElementById("menuImage").src =
        "images/menu" + currentImage + ".jpg";

}

function prevImage() {

    if (currentImage > 1) {
        currentImage--;
    }

    document.getElementById("menuImage").src =
        "images/menu" + currentImage + ".jpg";

}
function openMenu() {
    alert("Menu Opened");
}
function openMenu() {
    document.getElementById("menuPopup").style.display = "block";
}

function closeMenu() {
    document.getElementById("menuPopup").style.display = "none";
}
/* SCROLL REVEAL */

window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(item => {
        let windowHeight = window.innerHeight;
        let revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            item.classList.add("active");
        }
    });
}

reveal();


/* MOUSE MOVE EFFECT */

const overlay = document.querySelector(".overlay");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    overlay.style.transform = `translate(${x}px,${y}px)`;

});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {
    observer.observe(el);
});
window.addEventListener("load", ()=>{

    setTimeout(()=>{

        document
        .getElementById("loader")
        .classList.add("hide-loader");

    },3000);

});