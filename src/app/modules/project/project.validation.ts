import { z } from 'zod';

const createProjectValidation = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'Title must be a string',
    }),
    subTitle: z.string({
      invalid_type_error: 'Sub title must be a string',
    }),
    description: z.string({
      invalid_type_error: 'Description must be a string',
    }),

    image: z.string({
      invalid_type_error: 'Image must be a string',
    }),
    category: z.string({
      invalid_type_error: 'Category must be a string',
    }),
    liveLink: z.string({
      invalid_type_error: 'Live link must be a string',
    }),
    githubFrontend: z.string({
      invalid_type_error: 'Github Frontend link must be a string',
    }),
    githubBackend: z.string({
      invalid_type_error: 'Github Backend link must be a string',
    }),
    erDiagram: z.string({
      invalid_type_error: 'ER Diagram link must be a string',
    }),
    dataRelationDiagram: z.string({
      invalid_type_error: 'Data Relation Diagram link must be a string',
    }),
  }),
});

const updateProjectValidation = z.object({
  body: z.object({
    title: z
      .string({
        invalid_type_error: 'Title must be a string',
      })
      .optional(),
    subTitle: z
      .string({
        invalid_type_error: 'Sub title must be a string',
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'Description must be a string',
      })
      .optional(),

    image: z
      .string({
        invalid_type_error: 'Image must be a string',
      })
      .optional(),
    category: z
      .string({
        invalid_type_error: 'Category must be a string',
      })
      .optional(),
    liveLink: z
      .string({
        invalid_type_error: 'Live link must be a string',
      })
      .optional(),
    githubFrontend: z
      .string({
        invalid_type_error: 'Github Frontend link must be a string',
      })
      .optional(),
    githubBackend: z
      .string({
        invalid_type_error: 'Github Backend link must be a string',
      })
      .optional(),
    erDiagram: z
      .string({
        invalid_type_error: 'ER Diagram link must be a string',
      })
      .optional(),
    dataRelationDiagram: z
      .string({
        invalid_type_error: 'Data Relation Diagram link must be a string',
      })
      .optional(),
  }),
});
export const projectValidation = {
  createProjectValidation,
  updateProjectValidation,
};
