import Joi from 'joi';
import { IUser } from '../../interfaces/IUser';

const usernameRequired = '"username" is required';
const usernameString = '"username" must be a string';
const usernameLength = '"username" length must be at least 3 characters long';
const classeRequired = '"classe" is required';
const classeString = '"classe" must be a string';
const classeLength = '"classe" length must be at least 3 characters long';
const levelRequired = '"level" is required';
const levelNumber = '"level" must be a number';
const levelLength = '"level" must be greater than or equal to 1';
const passwordRequired = '"password" is required';
const passwordString = '"password" must be a string';
const passwordLength = '"password" length must be at least 8 characters long';

const joiValidation = Joi.object({
  username: Joi.string().min(2).required().messages({
    'any.required': usernameRequired,
    'string.base': usernameString,
    'string.min': usernameLength,
  }),
  classe: Joi.string().min(2).required().messages({
    'any.required': classeRequired,
    'string.base': classeString,
    'string.min': classeLength,
  }),
  level: Joi.number().min(1).required().messages({
    'any.required': levelRequired,
    'number.base': levelNumber,
    'number.min': levelLength,
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': passwordRequired,
    'string.base': passwordString,
    'string.min': passwordLength,
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