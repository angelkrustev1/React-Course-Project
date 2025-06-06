const request = async (method, url, data, options = {}) => {
    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    const response = await fetch(url, options);

    const responseContentType = response.headers.get('Content-Type');
    if (!responseContentType) {
        return;
    }

    const result = await response.json();

    return result;
}

export default {
    get: (...params) => request('GET', ...params),
    post: (...params) => request('POST', ...params),
    put: (...params) => request('PUT', ...params),
    delete: (...params) => request('DELETE', ...params)
}