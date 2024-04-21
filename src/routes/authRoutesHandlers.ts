import { Request, Response } from 'express'
import querystring from 'querystring'
import generateRandomString from '../utils/randomString'
import {
  SHARED_AUTH_HEADER,
  AUTH_SERVER_ROUTE,
  REDIRECT_URI,
  CLIENT_ID,
  AUTH_RESPONSE_TYPE,
} from '../utils/Constants'
import {
  AccessTokenResponse,
  AccessTokenRquestQuery,
  SignInRequestQuery,
} from './authRoutesTypes'

export const getAccessToken = async (
  request: Request<{}, {}, {}, AccessTokenRquestQuery>,
  response: Response
) => {
  response.send({})
}

export const refreshAccess = async (request: Request, response: Response) => {
  response.send({})
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
  response.send(request.query.code)
}
