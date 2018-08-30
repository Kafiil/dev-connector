const validator = require('validator');
const { isEmpty, validateFields } = require('./utils');

module.exports = function validatePostInput(data) {
  errors = {};

  const checkedFields = ['text'];
  data = validateFields(checkedFields, data);
  console.log(data);

  if (validator.isEmpty(data.text)) {
    errors.text = 'text field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
