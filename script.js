// Meld site — small, dependency-free enhancements

// 1. Nav border appears once user scrolls past hero top
(function navScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const toggle = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
})();

// 2. Reveal-on-scroll
(function reveal() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length || !('IntersectionObserver' in window)) {
    nodes.forEach(n => n.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  nodes.forEach(n => io.observe(n));
})();

// 3. Hero phone screen cycler
(function heroCycler() {
  const screen = document.querySelector('[data-hero-screen]');
  if (!screen) return;
  const imgs = screen.querySelectorAll('img');
  if (imgs.length < 2) return;
  let i = 0;
  imgs[0].classList.add('active');
  setInterval(() => {
    imgs[i].classList.remove('active');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('active');
  }, 3800);
})();

// 4. Current year
(function year() {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
