// Smooth scroll reveal for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
);

document.querySelectorAll('.role-card, .feature, .testimonials blockquote, .spotlight-feat, .faq details, .pricing-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`;
  observer.observe(el);
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
  });
});
