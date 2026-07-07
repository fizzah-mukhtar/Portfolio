document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-text');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('main section');
  const revealItems = document.querySelectorAll('.reveal');

  const phrases = [
    'full-stack web applications',
    'mobile apps with Flutter',
    'AI solutions and intelligent products',
    'scalable software systems'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentText = phrases[phraseIndex];
    if (!typingElement) return;

    typingElement.textContent = deleting
      ? currentText.slice(0, charIndex--)
      : currentText.slice(0, charIndex++);

    if (!deleting && charIndex > currentText.length) {
      deleting = true;
      setTimeout(typeLoop, 1100);
      return;
    }

    if (deleting && charIndex < 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typeLoop, deleting ? 50 : 80);
  }

  typeLoop();

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach(item => observer.observe(item));

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(section => sectionObserver.observe(section));
});
