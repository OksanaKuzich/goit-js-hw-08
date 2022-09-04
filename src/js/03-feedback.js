import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500));

populateText();

function onFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInputChange(event) {
  formData[event.target.name] = event.target.value;

  console.log(formData);

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parsedMessage = JSON.parse(savedMessage);

  if (savedMessage) {
    refs.input.value = parsedMessage.email;
    refs.textarea.value = parsedMessage.message;
  }
}
