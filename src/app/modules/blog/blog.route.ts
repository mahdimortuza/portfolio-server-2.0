import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { BlogController } from './blog.controller';
import { blogValidation } from './blog.validation';
const router = express.Router();

router.post(
  '/create-blog',
  // auth(USER_ROLE.admin),
  validateRequest(blogValidation.createBlogValidation),
  BlogController.createBlog,
);
router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getSingleBlog);
router.patch(
  '/:id',
  // auth(USER_ROLE.admin),
  validateRequest(blogValidation.updateBlogValidation),
  BlogController.updateSingleBlog,
);
router.delete(
  '/:id',
  // auth(USER_ROLE.admin),
  BlogController.deleteSingleBlog,
);

export const BlogRoute = router;
