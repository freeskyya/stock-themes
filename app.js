document.querySelectorAll('.theme-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    document.querySelectorAll('.theme-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.theme-panel').forEach((panel) => panel.classList.remove('active'));
    btn.classList.add('active');
    const panel = document.getElementById(btn.dataset.theme);
    if (panel) panel.classList.add('active');
  });
});
