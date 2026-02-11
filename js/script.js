// Theme toggle (dark/light)
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple form interaction (no backend)
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  msg.textContent = `Thanks, ${name || "friend"}! Your message is ready to be sent (demo).`;

  form.reset();
});

