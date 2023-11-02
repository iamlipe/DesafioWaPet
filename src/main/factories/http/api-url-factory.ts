export const makeApiUrl = (url: string, path: string, params?: Record<string, string>): string => {
  let apiUrl = `${url}${path}`;

  if (params) {
    const queryParams = new URLSearchParams(params);
    apiUrl += `?${queryParams.toString()}`;
  }

  return apiUrl;
};
