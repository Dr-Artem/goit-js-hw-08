
import throttle from 'lodash.throttle';
// import localeStorageApi from './localestorage'

const CONTACT_FROM_LS_KEY = "feedback-form-state";
let dataSet = {};

const params = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
};

function handleFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(CONTACT_FROM_LS_KEY);
  dataSet = {};
  console.log(dataSet);
}

function formInput({target}) {
  dataSet[target.name] = target.value;
  localStorage.setItem(CONTACT_FROM_LS_KEY, JSON.stringify(dataSet))
}

function outputText() {
  const previousMessage = JSON.parse(localStorage.getItem(CONTACT_FROM_LS_KEY)) || {};
  dataSet = previousMessage;
  params.input.value = previousMessage.email || '';
  params.textarea.value = previousMessage.message || '';
}

params.form.addEventListener('submit', handleFormSubmit);
params.form.addEventListener('input', throttle(formInput, 500));
outputText()


// const CONTACT_FROM_LS_KEY = 'formData'
// const contactFormEl = document.querySelector('.feedback-form');
//
// const fillContactFormFields = form => {
//   const formDataFromLS = localeStorageApi.load(CONTACT_FROM_LS_KEY);
//
//   if (!formDataFromLS) {
//     return;
//   }
//
//   const entries = Object.entries(formDataFromLS)
//   entries.forEach(([key, value]))
// }
// const handleContactFormChange = ({target}) => {
//   const {name, value} = target;
//   const formDataFromLS = localeStorageApi.load(CONTACT_FROM_LS_KEY) || {};
//
//   formDataFromLS[name] = value
//   localeStorageApi.save(CONTACT_FROM_LS_KEY, formDataFromLS)
// }
//
// const handleContactFormSubmit = event => {
//   event.preventDefault();
//   localeStorageApi.remove(CONTACT_FROM_LS_KEY)
//   event.target.reset();
// }
//
// contactFormEl.addEventListener('change', handleContactFormChange)
// contactFormEl.addEventListener('submit', handleContactFormSubmit)
// fillContactFormFields()