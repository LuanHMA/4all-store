/* eslint-disable @typescript-eslint/no-explicit-any */
interface RequestOptions {
  body?: any;
  headers?: Record<string, string>;
  [key: string]: any;
}

export async function fetchWrapper(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  options: RequestOptions = {}
) {
  const { body, headers, ...fetchOptions } = options;

  try {
    const response = await fetch(`https://dummyjson.com/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
      ...fetchOptions,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error fetching data');
    }

    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
