module.exports.isEmpty = isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value == 'object' && Object.keys(value) == 0) ||
  (typeof value == 'string' && value.trim().length == 0);

module.exports.validateFields = validateFields = (fields, data) => {
  fields.forEach(i => {
    data[i] = isEmpty(data[i]) ? '' : data[i];
  });
};
