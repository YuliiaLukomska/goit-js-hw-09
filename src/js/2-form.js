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
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(object));
}

function handleClearLS(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  localStorage.removeItem(LS_KEY);
  event.currentTarget.reset();
}

function checkLS() {
  const lSObject = JSON.parse(localStorage.getItem(LS_KEY));
  if (lSObject) {
    input.value = lSObject.email;
    textarea.value = lSObject.message;
  }
}
