const menuIcon = document.getElementById('menu');
const navList = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle the mobile menu when the hamburger icon is clicked
menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close the mobile menu when a navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Show "scroll to top" button when scrolling
window.addEventListener('scroll', () => {
  const scrollUp = document.querySelector('.scroll-to-top');
  // When the scroll is higher than 200 viewport height, add the show-scroll class
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
});

// Theme toggle
const themeButton = document.getElementById('theme-toggle');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun'; // Icon for light theme

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(light-theme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});