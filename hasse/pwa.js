// O service worker atua somente na pasta em que esta página é publicada.
if (window.isSecureContext && 'serviceWorker' in navigator) {
  const worker = new URL('sw.js', document.currentScript.src);
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(worker).catch(error => {
      console.warn('Hasse: modo offline não pôde ser ativado.', error);
    });
  }, { once: true });
}
