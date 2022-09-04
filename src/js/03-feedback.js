const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

console.log(refs.textarea);
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(event) {
  const message = event.currentTarget.value;
  console.log(message);
  localStorage.setItem('feedback-form-state', message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
