import { toggleTheme, loadTheme } from './modules/ToggleTheme';
import { Aside } from './modules/Aside';

//*Toggle theme on site
document.addEventListener('click', toggleTheme);
loadTheme();

//*Open Menu Aside on Small Devices
const $menuAside = document.querySelector('[data-type="menu_aside"]');
new Aside($menuAside as HTMLElement)