const validator = require('validator');
const { isEmpty, validateFields } = require('./utils');

module.exports = function validateEducationInput(data) {
  errors = {};

  const checkedFields = ['from', 'school', 'degree', 'fieldofstudy'];
  data = validateFields(checkedFields, data);

  // console.log(data);

  if (validator.toDate(data.from) == null) {
    errors.from = 'from field must be a valid date';
  }

  if (validator.isEmpty(data.from)) {
    errors.from = 'from field is required';
  }

  if (validator.isEmpty(data.school)) {
    errors.school = 'school field is required';
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = 'degree field is required';
  }

  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'fieldofstudy field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
