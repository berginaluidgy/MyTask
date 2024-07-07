let intervalId = null;

export default function istimek(callback) {
  let timer = 0;

  function change() {
    if (document.hidden) {
      intervalId = setInterval(() => {
        timer++;
      }, 1000);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        console.log('Bon retour, déconnecté depuis : ' + timer + ' secondes');
        if (callback) {
          callback(timer);
        }
        timer = 0; // Reset timer after logging or calling the callback
      }
    }
  }

  document.addEventListener('visibilitychange', change);

  return () => {
    document.removeEventListener('visibilitychange', change);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };
}
