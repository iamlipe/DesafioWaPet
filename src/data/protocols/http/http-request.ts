import { HttpResponse } from './http-response';

export interface HttpRequest {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
}

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
