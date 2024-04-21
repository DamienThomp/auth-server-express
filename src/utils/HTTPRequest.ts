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
): Promise<T | Error> {
	try {
		const response = await fetch(request, options)

		if (!response.ok) {
			throw new Error(
				`unable to fetch data: ${response.status} ${response.statusText}`
			)
		}

		const data = await response.json()

		return data as Promise<T>
	} catch (error) {
		return error as Promise<Error>
	}
}
