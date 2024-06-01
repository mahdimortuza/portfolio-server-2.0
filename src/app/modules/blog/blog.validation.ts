import { z } from 'zod';

// BlogValidation
const createBlogValidation = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'Title must be a string',
    }),
    image: z.string({
      invalid_type_error: 'Image must be a string',
    }),
    blogPara1: z.string({
      invalid_type_error: 'Blog must be a string',
    }),
    blogPara2: z.string({
      invalid_type_error: 'Blog must be a string',
    }),
    blogPara3: z.string({
      invalid_type_error: 'Blog must be a string',
    }),
    category: z.string({
      invalid_type_error: 'Category must be a string',
    }),
  }),
});

const updateBlogValidation = z.object({
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
    blogPara1: z
      .string({
        invalid_type_error: 'Blog must be a string',
      })
      .optional(),
    blogPara2: z
      .string({
        invalid_type_error: 'Blog must be a string',
      })
      .optional(),
    blogPara3: z
      .string({
        invalid_type_error: 'Blog must be a string',
      })
      .optional(),
    category: z
      .string({
        invalid_type_error: 'Category must be a string',
      })
      .optional(),
  }),
});

export const blogValidation = {
  createBlogValidation,
  updateBlogValidation,
};
