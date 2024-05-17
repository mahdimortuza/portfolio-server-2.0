import { z } from 'zod';

const createTechnologyValidation = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'Title must be a string',
    }),
    image: z.string({
      invalid_type_error: 'Image must be a string',
    }),
  }),
});

const updateTechnologyValidation = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: 'Title must be a string',
      })
      .optional(),
    image: z
      .string({
        invalid_type_error: 'Image must be a string',
      })
      .optional(),
  }),
});

export const technologyValidation = {
  createTechnologyValidation,
  updateTechnologyValidation,
};
