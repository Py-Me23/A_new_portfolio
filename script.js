const menuIcon = document.getElementById("menu");
const navList = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav ul li a");

// Toggle the mobile menu when the hamburger icon is clicked
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// Close the mobile menu when a navigation link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

// Show "scroll to top" button when scrolling
window.addEventListener("scroll", () => {
  const scrollUp = document.querySelector(".scroll-to-top");
  // When the scroll is higher than 200 viewport height, add the show-scroll class
  if (this.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});
