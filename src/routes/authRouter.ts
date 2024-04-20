import { Router } from 'express'
import { AuthRoutes } from './authRoutes'
import { getAccessToken, refreshAccess, signIn } from './authRoutesHandlers'

const router = Router()

router.get(AuthRoutes.accessToken, getAccessToken)
router.get(AuthRoutes.refreshAccess, refreshAccess)
router.get(AuthRoutes.signIn, signIn)

export default router
