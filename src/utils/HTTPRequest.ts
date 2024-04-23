export enum HTTPRequestMethod {
	get = 'GET',
	post = 'POST',
	put = 'PUT',
	delete = 'DELETE',
	patch = 'PATCH',
}

export async function fecthData<T>(
	request: globalThis.RequestInfo,
	options?: globalThis.RequestInit
): Promise<T | Response> {
	try {
		const response = await fetch(request, options)

		if (!response?.ok) return response

		const data = await response.json()

		return data as T
	} catch (error) {
		return error as Response
	}
}
