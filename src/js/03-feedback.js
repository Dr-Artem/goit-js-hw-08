'use strict'

import throttle from 'lodash.throttle';
import localeStorageApi from './localestorage'

const LS_KEY = "feedback-form-state";
let formData = {};

const params = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
};
function formInput({target}) {
  formData[target.name] = target.value;
  localStorage.setItem(LS_KEY, JSON.stringify(formData))
}
function handleFormSubmit(event) {
  event.preventDefault()
  localStorage.removeItem(LS_KEY)
  console.log(formData);
  event.target.reset()
}

function outputText() {
  const previousMessage = JSON.parse(localStorage.getItem(LS_KEY)) || {};
  formData = previousMessage;
  params.input.value = previousMessage.email || '';
  params.textarea.value = previousMessage.message || '';
}

outputText()
params.form.addEventListener('input', throttle(formInput, 500));
params.form.addEventListener('submit', handleFormSubmit);



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