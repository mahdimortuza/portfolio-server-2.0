import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { TechnologyController } from './technology.controller';
import { technologyValidation } from './technology.validation';
const router = express.Router();

router.post(
  '/create-technology',
  // auth(USER_ROLE.admin),
  validateRequest(technologyValidation.createTechnologyValidation),
  TechnologyController.createTechnology,
);
router.get('/', TechnologyController.getAllTechnologies);
router.get('/:id', TechnologyController.getSingleTechnology);
router.patch(
  '/:id',
  // auth(USER_ROLE.admin),
  validateRequest(technologyValidation.updateTechnologyValidation),
  TechnologyController.updateSingleTechnology,
);
router.delete(
  '/:id',
  // auth(USER_ROLE.admin),
  TechnologyController.deleteSingleTechnology,
);

export const TechnologyRoute = router;
