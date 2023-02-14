type HttpT = 'GET' | 'POST' | 'PUT' | 'DELETE';

type ConfigT = {
  method: HttpT;
  body?: string;
};

async function doFetch(
  method: HttpT,
  url: string,
  body?: {
    [key: string]: any;
  }
) {
  const config: ConfigT = { method };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(url, config);
  // delete has no content
  if (res.status !== 204) {
    return res.json();
  }
}

const http = {
  get: doFetch.bind(null, 'GET'),
  post: doFetch.bind(null, 'POST'),
  put: doFetch.bind(null, 'PUT'),
  del: doFetch.bind(null, 'DELETE'),
};

export default http;
