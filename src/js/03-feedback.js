import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const savedMessage = localStorage.getItem('feedback-form-state');
const parsedMessage = JSON.parse(savedMessage);

const formData = savedMessage ? parsedMessage : {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500));

populateText();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInputChange(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
  if (savedMessage) {
    refs.input.value = parsedMessage.email ?? '';
    refs.textarea.value = parsedMessage.message ?? '';
  }
}
