import '../styles/main.scss';
import { toggleTheme, loadTheme } from './modules/ToggleTheme';

//*Toggle theme on site
const $toggleThemeButton = document.getElementById('button_toggle-theme');
$toggleThemeButton?.addEventListener('click', toggleTheme);
loadTheme();

//*Open Menu Aside on Small Devices
const $asideToggleButton = document.querySelector('[data-type="toggle_aside"]');
const $menuAside = document.querySelector('[data-type="menu_aside"]');
$asideToggleButton?.addEventListener('click', ():string => {
  $asideToggleButton.ariaExpanded = 
  $asideToggleButton?.ariaExpanded === String(true)
      ? String(false)
      : String(true);
  return $menuAside!.ariaExpanded = $asideToggleButton.ariaExpanded;
});