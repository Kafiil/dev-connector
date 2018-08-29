const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value == 'object' && Object.keys(value) == 0) ||
  (typeof value == 'string' && value.trim().length == 0);

const validateFields = (fields, data) => {
  let result = {};
  fields.forEach(i => {
    result[i] = isEmpty(data[i]) ? '' : data[i];
  });
  return { ...data, ...result };
};

module.exports = {
  isEmpty,
  validateFields
};
