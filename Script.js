// ====== 1️⃣ Animate On Scroll (AOS) Init ======
AOS.init({
  duration: 1000,
  once: true,
});

// Uncomment if using Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 50 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'repulse' }
    }
  },
  retina_detect: true
});


// ====== 2️⃣ Smooth scroll for nav links ======
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ====== 3️⃣ Highlight active nav link on scroll ======
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// ====== 4️⃣ Pop-up toast on resume download ======
document.querySelectorAll('a').forEach(link => {
  if (link.hasAttribute('download')) {
    link.addEventListener('click', () => {
      showToast('✅ Resume download started!');
    });
  }
});

function showToast(message) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}
