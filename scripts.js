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
