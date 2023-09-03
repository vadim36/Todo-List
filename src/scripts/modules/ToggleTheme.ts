export function toggleTheme():void {
  if (document.body.getAttribute('dark-mode') === '') {
    localStorage.setItem('theme', 'light');
    return document.body.removeAttribute('dark-mode');
  }
  localStorage.setItem('theme', 'dark');
  return document.body.setAttribute('dark-mode', '');
}

export function loadTheme():void | null {
  if (!localStorage.getItem('theme')) {
    return document.body.setAttribute('dark-mode', '');
  }

  return localStorage.getItem('theme') === 'light'
    ? null
    : document.body.setAttribute('dark-mode', '');
}