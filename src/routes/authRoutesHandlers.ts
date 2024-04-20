import { Request, Response } from 'express'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const AUTH_HEADER = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET, 'base64')

const SHARED_HEADER = {
  'Cache-Control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded',
  Authorization: 'Basic ' + AUTH_HEADER,
}

export const getAccessToken = async (request: Request, response: Response) => {
  response.send({})
}

export const refreshAccess = async (request: Request, response: Response) => {
  response.send({})
}

export const signIn = async (request: Request, response: Response) => {
  response.send({})
}
