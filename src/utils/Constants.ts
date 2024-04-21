import 'dotenv/config'

const CLIENT_SECRET = process.env.CLIENT_SECRET
export const CLIENT_ID = process.env.CLIENT_ID
export const AUTH_SERVER_ROUTE = process.env.AUTHENICATION_SERVER_ROUTE || ''
export const REDIRECT_URI = process.env.REDIRECT_URI || ''
export const SHARED_AUTH_HEADER = {
  'Cache-Control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded',
  Authorization:
    'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET, 'base64'),
}
export const AUTH_RESPONSE_TYPE = 'code'
export const PORT = 3000
