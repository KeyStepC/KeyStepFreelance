const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Mobile menu
burger?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link
menu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// Scroll progress
const bar = document.querySelector(".scrollbar");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  bar.style.width = `${scrolled}%`;
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("isVisible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Contact form -> opens email client (simple + hosting friendly)
function sendEmail(event){
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`KeyStep inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:hello@keystep.consulting?subject=${subject}&body=${body}`;
  return false;
}
window.sendEmail = sendEmail;
