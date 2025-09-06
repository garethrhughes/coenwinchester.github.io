document.querySelectorAll('details').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('details[open]').forEach(other => {
        if (other !== d) other.removeAttribute('open');
      });
    }
  });
});