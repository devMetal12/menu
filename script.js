const tabs = document.querySelectorAll('.folder-tab');
const panels = document.querySelectorAll('.content-panel');

function applyTabTheme(tab) {

  const color = getComputedStyle(tab)
    .getPropertyValue('--tab-color')
    .trim();

  const textColor = getComputedStyle(tab)
    .getPropertyValue('--text-color')
    .trim();

  const texture = getComputedStyle(tab)
    .getPropertyValue('--tab-texture')
    .trim();

  const content = document.querySelector('.tab-content');

  content.style.setProperty('--content-color', color);
  content.style.setProperty('--content-texture', texture);
  content.style.setProperty('--content-text-color', textColor);
}

tabs.forEach(tab => {

  tab.addEventListener('click', () => {

    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    panels.forEach(panel => {
      panel.classList.remove('active');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const panelId = tab.dataset.tab;

    document
      .getElementById(panelId)
      .classList
      .add('active');

    applyTabTheme(tab);

  });

});

// Inicializar colores con la pestaña activa
const activeTab = document.querySelector('.folder-tab.active');

if (activeTab) {
  applyTabTheme(activeTab);
}