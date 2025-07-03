// Typing animation (already there)
const text = "Hi, I’m Muskan — Front-End Developer";
const typedText = document.querySelector(".typed-text");
let i = 0;

function type() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.onload = type;

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});
