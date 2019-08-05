const Joi = require('joi');

function validateLoginEmail(loginEmail) {
  console.log('hello rukee');
  const schema = {
    email: Joi.string().email(),
    password: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(schema, loginEmail);
}

module.exports = validateLoginEmail;
