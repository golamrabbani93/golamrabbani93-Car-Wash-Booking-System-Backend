import { Router } from 'express'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../User/user.constant'
import validateRequest from '../../middlewares/validateRequest'
import { ServiceValidation } from './service.validation'
import { serviceControllers } from './service.controller'

const router = Router()

// !Create Service Admin Only

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.createServiceValidationSchema),
  serviceControllers.createService,
)

export const serviceRoutes = router
