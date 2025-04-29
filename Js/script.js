document.addEventListener("DOMContentLoaded", function () {
    // Light/Dark Mode Toggle
    const toggleMode = document.getElementById("toggleMode");
    toggleMode.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      toggleMode.textContent = document.body.classList.contains("light-mode")
        ? "🌙 Switch to Dark Mode"
        : "☀️ Switch Theme";
    });
  
    // Fade-in Animation for Sections
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  
    // Modal for Explore Button
    const exploreBtn = document.getElementById("exploreBtn");
    const modal = document.getElementById("exploreModal");
    const closeModal = document.querySelector(".modal .close");
  
    exploreBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close modal if clicking outside of the modal content
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  