const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const BASIC_KEY = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET, 'base64')

export const AUTH_SERVER_ROUTE = process.env.AUTHENICATION_SERVER_ROUTE

export const SHARED_AUTH_HEADER = {
  'Cache-Control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded',
  Authorization: 'Basic ' + BASIC_KEY,
}
