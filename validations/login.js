const validator = require('validator');
const isEmpty = require('./utils').isEmpty;
const validateFields = require('./utils').validateFields;

module.exports = function validateLoginInput(data) {
  errors = {};

  const checkedFields = ['email', 'password'];
  validateFields(checkedFields, data);

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
