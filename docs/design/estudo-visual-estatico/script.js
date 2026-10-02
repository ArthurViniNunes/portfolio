const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

if (toggle && mobileNav) {
  const closeMenu = (returnFocus = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.hidden = expanded;
  });

  mobileNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true);
  });

  document.addEventListener('click', (event) => {
    if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
  });

  window.matchMedia('(min-width: 921px)').addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
}

const hero = document.querySelector('.hero');
const atmosphere = document.querySelector('.hero-atmosphere');

if (hero && atmosphere) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  let frame = 0;

  const resetAtmosphere = () => {
    cancelAnimationFrame(frame);
    atmosphere.style.setProperty('--ambient-x', '0px');
    atmosphere.style.setProperty('--ambient-y', '0px');
  };

  hero.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches || !finePointer.matches) return;
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      atmosphere.style.setProperty('--ambient-x', `${x * 18}px`);
      atmosphere.style.setProperty('--ambient-y', `${y * 12}px`);
    });
  });

  hero.addEventListener('pointerleave', resetAtmosphere);
  reducedMotion.addEventListener('change', resetAtmosphere);
  finePointer.addEventListener('change', resetAtmosphere);
}

const readingProgress = document.querySelector('.reading-progress');

if (readingProgress) {
  let frame = 0;
  const updateProgress = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      const progress = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 1;
      readingProgress.style.transform = `scaleX(${progress})`;
    });
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}
