/**@type {HTMLTextAreaElement}*/
const textarea = document.querySelector('#send_textarea');
window.addEventListener('keydown', (evt)=>{
    if (document.activeElement == textarea) return;
    if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (evt.key == ' ' || evt.key.length > 1 || evt.ctrlKey || evt.altKey) return;
    const rect = textarea.getBoundingClientRect();
    if (document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2) != textarea) return;
    textarea.focus();
});
