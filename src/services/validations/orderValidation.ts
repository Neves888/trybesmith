import Joi from 'joi';

const joiValidationProductId = Joi.array().min(1).required().messages({
  'any.required': '"productsIds" is required',
  'array.base': '"productsIds" must be an array',
  'array.min': '"productsIds" must include only numbers',
});

export default (body: number[]) => {
  const { error } = joiValidationProductId.validate(body);
  if (error) {
    const code = error.details[0].type === 'any.required' ? 400 : 422;
    return { code, response: error.message };
  }
  return { code: null, response: null };
};
