interface IssueFormData {
  name:string,
  description?:string
}

const renameLogo = new URL('../../assets/rename-svgrepo-com.svg', import.meta.url);
const deleteIcon = new URL('../../assets/delete-svgrepo-com.svg', import.meta.url);

function getIssueTemplate({name, description}:IssueFormData):string {
  return `
    <strong>${name}</strong>
    <p>${description}</p>
    <button data-type="button-rename_issue">
      <img src="${renameLogo}" alt="rename logo">
    </button>
    <button data-type="button-remove_issue">
      <img src="${deleteIcon}" alt="delete icon">
    </button>
  `;
}

export function issueFormHandler(event):string | void {
  const target = event.submitter
    .closest('button[data-type="button-add_issue"]');

  if (target) {
    event.preventDefault();

    const $issueForm = event.target.closest('form');
    const $issueContainer = $issueForm.parentElement;
      
    const issueFormName:string = ($issueForm
      .querySelector('input[data-type="issue_name-field"]') as HTMLInputElement).value;
    const issueFormDescription:string = ($issueForm
      .querySelector('textarea[data-type="issue_text-field"]') as HTMLTextAreaElement)
      .value || '';
    
    const issueFormData:IssueFormData = {
      name: issueFormName,
      description: issueFormDescription
    }
  
    $issueForm.remove();
  
    delete $issueContainer?.dataset.editable;
    $issueContainer!.setAttribute('draggable', String(true));
  
    return $issueContainer!.innerHTML = getIssueTemplate(issueFormData);
  }  
}