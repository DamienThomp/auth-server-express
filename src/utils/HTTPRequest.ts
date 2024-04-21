import fetch, { RequestInfo, RequestInit } from 'node-fetch'

export async function fecthData<T>(
  request: RequestInfo,
  options?: RequestInit
): Promise<T | Error> {
  try {
    const response = await fetch(request, options)
    const data = await response.json()
    return data as Promise<T>
  } catch (error) {
    return error as Promise<Error>
  }
}
