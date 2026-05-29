const tabs = document.querySelectorAll('.folder-tab');
const panels = document.querySelectorAll('.content-panel');

function updateTheme(tab) {
  const color = getComputedStyle(tab)
    .getPropertyValue('--tab-color')
    .trim();

  const textColor = getComputedStyle(tab)
    .getPropertyValue('--text-color')
    .trim();

  document.documentElement
    .style
    .setProperty('--active-color', color);

  document.documentElement
    .style
    .setProperty('--active-text-color', textColor);
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // Reset tabs
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    // Reset panels
    panels.forEach(panel => {
      panel.classList.remove('active');
    });

    // Activate current tab
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // Activate corresponding panel
    const panelId = tab.dataset.tab;
    document.getElementById(panelId).classList.add('active');

    // Update colors
    updateTheme(tab);
  });
});

// Inicializar colores con la pestaña activa
const activeTab = document.querySelector('.folder-tab.active');

if (activeTab) {
  updateTheme(activeTab);
}