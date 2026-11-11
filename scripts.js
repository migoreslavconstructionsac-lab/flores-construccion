(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.textContent='☰';
      }
    });
  }
})();

// Fotografías: si la fuente de stock externa deja de responder, mostrar imagen local relacionada.
document.querySelectorAll('img[data-fallback]').forEach((image) => {
  image.addEventListener('error', () => {
    if (image.dataset.triedFallback === '1') return;
    image.dataset.triedFallback = '1';
    image.src = image.dataset.fallback;
  });
});
