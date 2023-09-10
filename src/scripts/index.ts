import { toggleTheme, loadTheme } from './modules/ToggleTheme';
import { Aside } from './modules/Aside';
import { TodoItem } from './modules/TodoItem';
import { issueFormHandler } from './modules/IssueFormHandler';
import { deleteIssueHandler } from './modules/DeleteIssueHandler';

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

//*Add todo
const $main = document.querySelector('.main');
$main?.addEventListener('click', (event):void => {
  const target = (event.target as HTMLElement).closest('[data-type="button_add-todo"]');

  if (target) {
    const $issueColumn = target.parentElement
      ?.closest('.column-issue')?.querySelector('.column-issue__section-issue');
    new TodoItem($issueColumn as HTMLElement); 
  }
});

$main?.addEventListener('submit', issueFormHandler);
$main?.addEventListener('click', deleteIssueHandler);