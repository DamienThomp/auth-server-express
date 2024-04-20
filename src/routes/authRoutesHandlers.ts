import { Request, Response } from 'express'
import { SHARED_AUTH_HEADER, AUTH_SERVER_ROUTE } from '../utils/Constants'

export const getAccessToken = async (request: Request, response: Response) => {
  response.send({})
}

export const refreshAccess = async (request: Request, response: Response) => {
  response.send({})
}

export const signIn = async (request: Request, response: Response) => {
  response.send({})
}

export const redirect = async (request: Request, response: Response) => {
  response.send({})
}
