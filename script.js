const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// 2. Select and observe elements
document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
  observer.observe(el);
});

const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
const socialIcons = document.getElementById('socialIcons');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    socialIcons.classList.toggle('active');
});