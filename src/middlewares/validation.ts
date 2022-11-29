import { Request, Response } from 'express';
import HttpExpecption from '../utils/error';

const validation = (err: Error, _req: Request, res: Response) => {
  const { type, message } = err as HttpExpecption;
  if (type) return res.status(type).json({ message });
  return res.status(500).json(message);
};

export default validation;