const Joi = require('joi');

console.log(Joi, 'rukee');

function validateLoginEmail(loginEmail) {
  const schema = { email: Joi.string().email()};
  return Joi.validate(schema,loginEmail)
}
