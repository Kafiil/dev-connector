const validator = require('validator');
const { isEmpty, validateFields } = require('./utils');

module.exports = function validateLoginInput(data) {
  errors = {};

  const checkedFields = ['email', 'password'];
  data = validateFields(checkedFields, data);
  console.log(data);

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is not valid';
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
