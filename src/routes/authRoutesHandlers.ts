import type { Request, Response } from 'express'
import querystring from 'querystring'
import {
	SHARED_AUTH_HEADER,
	AUTH_SERVER_ROUTE,
	REDIRECT_URI,
	CLIENT_ID,
	AUTH_RESPONSE_TYPE,
	AUTH_TOKEN_ROUTE,
} from '../utils/Constants'
import type {
	AccessTokenResponse,
	AccessTokenRquestQuery,
	RefreshTokenRequestQuery,
	SignInRequestQuery,
} from './authRoutesTypes'
import { AuthRoutesErrors, AuthGrantType } from './authRoutesTypes'
import { HTTPRequestMethod, fecthData } from '../utils/HTTPRequest'

export const getAccessToken = async (
	request: Request<{}, {}, {}, AccessTokenRquestQuery>,
	response: Response
) => {
	const { code } = request.query

	if (!code) {
		return response.status(400).send(AuthRoutesErrors.missingCode)
	}

	const formData = new URLSearchParams({
		code,
		redirect_uri: REDIRECT_URI ?? '',
		grant_type: AuthGrantType.authorizationCode,
	})

	const tokenResponse = await fecthData<AccessTokenResponse>(
		AUTH_TOKEN_ROUTE ?? '',
		{
			method: HTTPRequestMethod.post,
			headers: SHARED_AUTH_HEADER,
			body: formData,
		}
	)
	if (tokenResponse.status >= 300) {
		return response.status(tokenResponse.status).send(tokenResponse.statusText)
	}

	return response.send(tokenResponse)
}

export const refreshAccess = async (
	request: Request<{}, {}, {}, RefreshTokenRequestQuery>,
	response: Response
) => {
	const { refresh_token } = request.query

	if (!refresh_token) {
		return response.status(400).send(AuthRoutesErrors.missingRefreshToken)
	}

	const formData = new URLSearchParams({
		grant_type: AuthGrantType.refreshToken,
		refresh_token: refresh_token,
	})

	const tokenResponse = await fecthData<AccessTokenResponse>(
		AUTH_TOKEN_ROUTE ?? '',
		{
			method: HTTPRequestMethod.post,
			headers: SHARED_AUTH_HEADER,
			body: formData,
		}
	)

	if (tokenResponse.status >= 300) {
		return response.status(tokenResponse.status).send(tokenResponse.statusText)
	}

	return response.send(tokenResponse)
}

export const signIn = async (
	request: Request<{}, {}, {}, SignInRequestQuery>,
	response: Response
) => {
	const { scope } = request.query

	const redirectUrl = [
		AUTH_SERVER_ROUTE,
		querystring.stringify({
			response_type: AUTH_RESPONSE_TYPE,
			client_id: CLIENT_ID,
			scope: scope,
			redirect_uri: REDIRECT_URI,
		}),
	].join('?')

	response.redirect(redirectUrl)
}

export const callback = async (request: Request, response: Response) => {
	response.sendFile('/src/public/index.html', { root: './' })
}
