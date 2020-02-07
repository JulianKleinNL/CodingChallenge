export enum HttpMethod {
  GET = 'GET',
  POST = 'POST'
}

type Request = {
  endpoint: string;
  httpMethod: HttpMethod;
  headers?: object;
  data?: object | FormData;
};

const getBody = (body: object | FormData | undefined) => {
  if (body instanceof FormData) {
    return body;
  }
  return JSON.stringify(body);
};

export const request = <T>({
  endpoint,
  httpMethod,
  headers,
  data
}: Request): Promise<T> => {
  const url = 'https://5e32b627e0161c00140abad2.mockapi.io/' + endpoint;
  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const mergedHeaders = new Headers({ ...defaultHeaders, ...headers });
  const body = getBody(data);
  return fetch(url, {
    method: httpMethod,
    cache: 'no-store',
    headers: mergedHeaders,
    ...(data && { body })
  }).then(response => {
    if (response.status >= 400) {
      if (typeof response.json === 'function') {
        return response.json().then(errorJSON => {
          throw errorJSON;
        });
      }
      throw response;
    }
    return response.json();
  });
};
