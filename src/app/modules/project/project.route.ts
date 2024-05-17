import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ProjectController } from './project.controller';
import { projectValidation } from './project.validation';
const router = express.Router();

router.post(
  '/create-project',
  // auth(USER_ROLE.admin),
  validateRequest(projectValidation.createProjectValidation),
  ProjectController.createProject,
);
router.get('/', ProjectController.getAllProject);
router.get('/:id', ProjectController.getSingleProject);
router.patch(
  '/:id',
  // auth(USER_ROLE.admin),
  validateRequest(projectValidation.updateProjectValidation),
  ProjectController.updateSingleProject,
);
router.delete(
  '/:id',
  // auth(USER_ROLE.admin),
  ProjectController.deleteSingleProject,
);

export const ProjectRoute = router;
