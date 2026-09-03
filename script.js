const typedElement = document.querySelector('.typed');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const backToTop = document.querySelector('.back-to-top');
const progressBar = document.getElementById('scrollProgress');
const revealItems = document.querySelectorAll('.reveal');

if (typedElement) {
  const strings = typedElement.dataset.strings.split(',');
  let stringIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentText = strings[stringIndex];

    if (!deleting) {
      charIndex += 1;
      typedElement.textContent = currentText.slice(0, charIndex);

      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      charIndex -= 1;
      typedElement.textContent = currentText.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
      }
    }

    const speed = deleting ? 55 : 110;
    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const onScroll = () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.width = `${percentage}%`;

  if (scrollTop > 420) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
};

window.addEventListener('scroll', onScroll);
onScroll();

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const particleContainer = document.getElementById('particles');
if (particleContainer) {
  for (let i = 0; i < 24; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${8 + Math.random() * 10}s`;
    particleContainer.appendChild(particle);
  }
}

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Message Sent';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = 'Send Message';
    button.disabled = false;
    event.currentTarget.reset();
  }, 1800);
});
