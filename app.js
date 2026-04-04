document.querySelectorAll('.subtheme-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    document.querySelectorAll('.subtheme-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.theme-panel').forEach((panel) => panel.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(btn.dataset.theme);
    if (panel) panel.classList.add('active');
  });
});

document.querySelectorAll('.group-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const group = toggle.closest('.theme-group');
    if (!group) return;
    group.classList.toggle('open');
    const mark = toggle.querySelector('.toggle-mark');
    if (mark) {
      mark.textContent = group.classList.contains('open') ? '▾' : '▸';
    }
  });
});
