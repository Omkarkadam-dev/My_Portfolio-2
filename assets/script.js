// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  
  // Reveal skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.3,
});

skillCards.forEach(card => {
  observer.observe(card);
});


// Reveal about content on scroll
const aboutContent = document.querySelector('.about-content');

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutContent.classList.add('in-view');
    }
  });
}, {
  threshold: 0.4,
});

aboutObserver.observe(aboutContent);
