//QUERY
export interface SignInRequestQuery {
	scope: string
}

export interface AccessTokenRquestQuery {
	code: string
}

export interface RefreshTokenRequestQuery {
	refresh_token: string
}

//RESPONSE
export interface AccessTokenResponse extends globalThis.Response {
	access_token: string
	refresh_token?: string
	expires_in: number
	token_type?: string
}

//ERRORS
export enum AuthRoutesErrors {
	missingRefreshToken = 'Refresh token missing from request',
	missingCode = 'Missing code in request',
}
