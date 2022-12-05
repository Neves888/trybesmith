import Joi from 'joi';
import { ILogin } from '../../interfaces/ILogin';

const usernameError = '"username" is required';
const passwordError = '"password" is required';

const joiValidation = Joi.object({ 
  username: Joi.string().required().messages({
    'any.required': usernameError,
  }),
  password: Joi.string().required().messages({
    'any.required': passwordError,
  }),
});

export default (body: ILogin) => {
  const { error } = joiValidation.validate(body);
  if (error) return { code: 400, response: error.message };
  return { code: null, response: null };
};
