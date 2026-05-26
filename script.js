const tabs = document.querySelectorAll('.folder-tab');
const panels = document.querySelectorAll('.content-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // reset
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    panels.forEach(panel => {
      panel.classList.remove('active');
    });

    // activate tab
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    // activate panel
    const panelId = tab.dataset.tab;
    document.getElementById(panelId).classList.add('active');

    // 🔥 GLOBAL ACTIVE COLOR
    const color = getComputedStyle(tab)
      .getPropertyValue('--tab-color');

    document.documentElement
      .style
      .setProperty('--active-color', color);
  });
});

const activeTab = document.querySelector('.folder-tab.active');

if (activeTab) {
  const activeColor = getComputedStyle(activeTab)
    .getPropertyValue('--tab-color');

  document.documentElement
    .style
    .setProperty('--active-color', activeColor);
}