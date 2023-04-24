const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProduct(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.stock = !isEmpty(data.stock) ? data.stock : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "required name";
  }
  if (validator.isEmpty(data.price)) {
    errors.price = "required price";
  }
  if (validator.isEmpty(data.category)) {
    errors.category = "required category";
  }
  if (validator.isEmpty(data.stock)) {
    errors.stock = "required stock";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "required description";
  }

  return  {
    errors,
    isValid: isEmpty(errors)
  }

};
