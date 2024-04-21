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
export interface AccessTokenResponse {
  access_token: string
  refresh_token?: string
  expires_in: number
  token_type?: string
}
