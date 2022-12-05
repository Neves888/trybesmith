import Joi from 'joi';
import { IProduct } from '../../interfaces/IProduct';

const nameRequired = '"name" is required';
const nameString = '"name" must be a string';
const nameLength = '"name" length must be at least 3 characters long';
const amountRequired = '"amount" is required';
const amountString = '"amount" must be a string';
const amountLength = '"amount" length must be at least 3 characters long';

const joiValidation = Joi.object({ 
  name: Joi.string().min(2).required().messages({
    'any.required': nameRequired,
    'string.base': nameString,
    'string.min': nameLength,
  }),
  amount: Joi.string().min(2).required().messages({
    
    'any.required': amountRequired,
    'string.base': amountString,
    'string.min': amountLength,
  }),
});

export default (body: IProduct) => {
  const { error } = joiValidation.validate(body);
  if (error) {
    const code = error.details[0].type === 'any.required' ? 400 : 422;
    return { code, response: error.message };
  } 
  return { code: null, response: null };
};
