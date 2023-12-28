const formRef = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

const input = formRef.elements.email;
const textarea = formRef.elements.message;

formRef.addEventListener('input', handleSaveFormValue);
formRef.addEventListener('submit', handleClearLS);
checkLS();

function handleSaveFormValue(event) {
  const emailValue = input.value;
  const messageValue = textarea.value;
  const object = {
    email: emailValue.trim(),
    message: messageValue.trim(),
  };
  localStorage.setItem(LS_KEY, JSON.stringify(object));
}

function handleClearLS(event) {
  event.preventDefault();
  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('Please, fill in all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem(LS_KEY)));
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
  }
}

function checkLS() {
  const lSObject = localStorage.getItem(LS_KEY);
  if (lSObject) {
    input.value = JSON.parse(lSObject).email;
    textarea.value = JSON.parse(lSObject).message;
  }
}
