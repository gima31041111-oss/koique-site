(() => {
  const replies = {
    tell: 'その勇気、すてき。どんなふうに伝えたい？',
    wait: '待つ時間もドキドキ。どんなサインがあったらうれしい？'
  };
  const buttons = [...document.querySelectorAll('.trial-answers button')];
  const response = document.querySelector('#trial-response');
  if (!response || buttons.length !== 2) return;
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      response.textContent = replies[button.dataset.answer];
    });
    button.disabled = false;
  });
})();
