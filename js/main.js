// Minimal JS for interactivity, scroll effects, and navigation

document.addEventListener('DOMContentLoaded', () => {
  // Experience card expand/collapse on click (for mobile)
  document.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (window.innerWidth < 700) {
        this.classList.toggle('active');
      }
    });
  });

  // Scroll reveal effect
  const revealEls = document.querySelectorAll('.timeline-card, .about-section, .contact-section, .hero-section');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.92;
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add('revealed');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Contact form (dummy handler)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('form-message').textContent = 'Thank you! I’ll get back to you soon.';
      form.reset();
    });
  }
});
