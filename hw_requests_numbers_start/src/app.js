const NumberFormView = require('./views/number_form_view');
const NumberFactsView = require('./views/number_details_view');

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();
});
