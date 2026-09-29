(function () {
  var root = document.documentElement;
  var STORAGE_KEY = 'koique-theme';
  var THEME_COLORS = { pink: '#fffafb', blue: '#fafbff' };

  function applyPressedState(theme) {
    var buttons = document.querySelectorAll('.theme-pick');
    for (var i = 0; i < buttons.length; i++) {
      var isActive = buttons[i].getAttribute('data-theme-choice') === theme;
      buttons[i].setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  function setTheme(theme, persist) {
    if (theme === 'pink') {
      root.setAttribute('data-theme', 'pink');
    } else {
      root.removeAttribute('data-theme');
      theme = 'blue';
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);
    applyPressedState(theme);
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var current = root.getAttribute('data-theme') === 'pink' ? 'pink' : 'blue';
    setTheme(current, false);
    var buttons = document.querySelectorAll('.theme-pick');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (event) {
        setTheme(event.currentTarget.getAttribute('data-theme-choice'), true);
      });
    }
  });
})();
