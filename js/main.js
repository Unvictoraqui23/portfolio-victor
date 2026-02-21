const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Crear overlay dinámicamente
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

if (menuToggle && navLinks) {

  menuToggle.setAttribute("aria-expanded", "false");

  const openMenu = () => {
    navLinks.classList.add("active");
    menuToggle.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  // Cerrar al hacer click en overlay
  overlay.addEventListener("click", closeMenu);

  // Cerrar al hacer click en un link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // ESC key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu();
    }
  });

}
