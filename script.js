const textarea = document.querySelector('#text')

textarea.addEventListener('input', handleTextAreaInput)
document.addEventListener('DOMContentLoaded', handleDocumentLoad)

function handleDocumentLoad() {
  textarea.value = localStorage.getItem('text') ?? ''
}
function handleTextAreaInput() {
  localStorage.removeItem('text')
  localStorage.setItem('text', textarea.value)
}