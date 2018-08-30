const validator = require('validator');
const { isEmpty, validateFields } = require('./utils');

module.exports = function validateExperienceInput(data) {
  errors = {};

  const checkedFields = ['from', 'title', 'location', 'description','company'];
  data = validateFields(checkedFields, data);

  if (validator.toDate(data.from) == null) {
    errors.from = 'from field must be a valid date';
  }
  
  if (validator.isEmpty(data.company)) {
    errors.company = 'company field is required';
  }

  if (validator.isEmpty(data.from)) {
    errors.from = 'from field is required';
  }

  if (validator.isEmpty(data.title)) {
    errors.title = 'title field is required';
  }

  if (validator.isEmpty(data.location)) {
    errors.location = 'location field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
