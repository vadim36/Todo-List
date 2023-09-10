export class TodoItem {
  constructor(readonly $appendElement:HTMLElement) {
    this.render($appendElement);
  }

  private render($appendElement):void {
    const $todoItem = document.createElement('div');
    $todoItem.className = 'column-issue__issue issue';
    $todoItem.dataset.type = 'issue';
    $todoItem.dataset.editable = '';

    $todoItem.innerHTML = `
      <form>
        <input 
          name="text" 
          data-type="issue_name-field" 
          required 
          placeholder="Введите задачy...">
        <textarea 
          rows="3"
          cols="50"
          maxlength="150"
          placeholder="Введите описание..."
          data-type="issue_text-field"></textarea>
        <button type="submit" data-type="button-add_issue">Добавить</button>
        <button data-type="button-remove_issue">Удалить</button>
      </form>
    `;
    return ($appendElement as HTMLElement).append($todoItem);
  }
}