import gsap from 'gsap';

export function deleteIssueHandler(event):void {
  const $target = event.target.closest('button[data-type="button-remove_issue"]');

  if ($target) { 
    const deleteDelay:number = .35;
    const $currentIssue = $target!.closest('[data-type="issue"]');
    const $nextIssue = $currentIssue?.nextElementSibling;
    
    gsap.to($currentIssue, { duration: deleteDelay, opacity: 0});
    setTimeout(():void => $currentIssue!.remove(), deleteDelay * 1000);
  }
}