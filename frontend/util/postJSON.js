import 'isomorphic-fetch'

const jsonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export default async (url, postData) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(postData),
  });
  if (res.status != 200) {
    throw new Error(`Got status ${res.status} for POST ${url}`);
  }
  return await res.json();
};
