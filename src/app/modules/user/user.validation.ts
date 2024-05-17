import { z } from 'zod';

const createUserValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Name must be a string',
    }),
    password: z.string({
      invalid_type_error: 'Password must be a string',
    }),
  }),
});

export default createUserValidation;
