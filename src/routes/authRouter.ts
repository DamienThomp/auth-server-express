import { Router } from 'express'
import { AuthRoutes } from './authRoutes'
import {
	callback,
	getAccessToken,
	refreshAccess,
	signIn,
} from './authRoutesHandlers'

const router = Router()

router.get(AuthRoutes.accessToken, getAccessToken)
router.get(AuthRoutes.refreshAccess, refreshAccess)
router.get(AuthRoutes.signIn, signIn)
router.get(AuthRoutes.callback, callback)

export default router
