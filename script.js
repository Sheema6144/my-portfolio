document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-links a");
  const path = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
    link.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});