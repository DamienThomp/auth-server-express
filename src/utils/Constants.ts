import 'dotenv/config'

export const PORT = 3000
export const CLIENT_SECRET = process.env.CLIENT_SECRET
export const CLIENT_ID = process.env.CLIENT_ID
export const REDIRECT_URI = process.env.REDIRECT_URI
export const AUTH_SERVER_ROUTE = process.env.AUTHENICATION_SERVER_ROUTE
export const AUTH_TOKEN_ROUTE = process.env.AUTHENICATION_TOKEN_ROUTE
export const AUTH_RESPONSE_TYPE = 'code'
export const SHARED_AUTH_HEADER = {
	'Cache-Control': 'no-cache',
	'content-type': 'application/x-www-form-urlencoded',
	Authorization:
		'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
}
