/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector(".openbtn").classList.add("hidden");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector(".openbtn").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".overlay-content a");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeNav();
    });
  });

  // Set initial background overlay opacity
  const overlay = document.querySelector(".background-overlay");
  overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";

  // IntersectionObserver for animations
  const the_animation = document.querySelectorAll(".animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-animation");
          overlay.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        } else {
          entry.target.classList.remove("scroll-animation");
          overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];

    observer.observe(elements);
  }
});
