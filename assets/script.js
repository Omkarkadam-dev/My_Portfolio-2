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


// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.3,
});

projectCards.forEach(card => {
  projectObserver.observe(card);
});


// Auto slide testimonial cards
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showNextTestimonial() {
  testimonials.forEach(card => card.classList.remove('active'));
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  testimonials[testimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 5000);

// Optional: show first on load
testimonials[0].classList.add('active');


// Reveal testimonials on scroll
const testimonialCards = document.querySelectorAll('.testimonial-card');

const testimonialObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.3,
});

testimonialCards.forEach(card => testimonialObserver.observe(card));


// Fade-in animation for the CTA section
const ctaSection = document.querySelector('.cta');

const ctaObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.3,
});

ctaObserver.observe(ctaSection);


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Display a success message (for demo)
    alert("Thank you for reaching out! Your message has been sent.");
    
    // Reset form
    document.getElementById("contact-form").reset();
  });
  