import { toggleTheme, loadTheme } from './modules/ToggleTheme';
import { Aside } from './modules/Aside';

//*Toggle theme on site
document.addEventListener('click', toggleTheme);
loadTheme();

//*Open Menu Aside on Small Devices
const $menuAside = document.querySelector('[data-type="menu_aside"]');
new Aside($menuAside as HTMLElement);

//*Rename Table Title
const $header = document.querySelector('.header');

$header?.addEventListener('dragstart', (event) => {
  if ((event.target as HTMLElement)!.closest('[data-type="rename-title_button"]')) {
    event.preventDefault();
  }
});

$header?.addEventListener('click', (event):void => {
  if ((event.target as HTMLElement).closest('[data-type="table_link"]')) {
    event.preventDefault();
  }
});

$header?.addEventListener('click', (event):void => {
  const target = (event.target as HTMLElement)
    .closest('[data-type="rename-title_button"]');

  if (target) {
    const $navLink = target.parentElement;
    const $tableLink = $navLink?.querySelector('[data-type="table_link"]');
    const isEditLink = $tableLink?.getAttribute('contenteditable') === String(true);

    ($tableLink as HTMLElement).contentEditable = 
      isEditLink 
        ? String(false) 
        : String(true);
  }
});