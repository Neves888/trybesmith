import Joi from 'joi';
import { IUser } from '../../interfaces/IUser';

const joiValidation = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': '"username" is required',
    'string.base': '"username" must be a string',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': '"classe" is required',
    'string.base': '"classe" must be a string',
    'string.min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': '"level" is required',
    'number.base': '"level" must be a number',
    'number.min': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': '"password" is required',
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

export default (body: IUser) => {
  const { error } = joiValidation.validate(body);
  if (error) {
    const code = error.details[0].type === 'any.required' ? 400 : 422;
    return { code, response: error.message };
  }
  return { code: null, response: null };
};