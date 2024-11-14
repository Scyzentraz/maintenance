document.addEventListener("DOMContentLoaded", function() {
  const fadeInElements = document.querySelectorAll(".fade-in");

  fadeInElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.5}s`;
    el.classList.add("visible");
  });
});