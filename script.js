
// Navigation switching
function navigate(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll("nav a").forEach(link => link.classList.remove("active"));
  document.querySelector(`nav a[href="#${sectionId}"]`).classList.add("active");
}

// Dark/Light Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Event listeners for nav links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      navigate(sectionId);
    });
  });

  // Default section
  navigate("home");
});
