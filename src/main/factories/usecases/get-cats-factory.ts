import { GetCats } from '@/domain/usecases';
import { RemoteGetCats } from '@/data/usecases';
import { makeApiUrl, makeAxiosHttpClient } from '../http';
import { BASE_CAT_API } from '@env';

export const makeRemoteGetCats = (params?: Record<string, string>): GetCats =>
  new RemoteGetCats(makeApiUrl(BASE_CAT_API, '/images/search', params), makeAxiosHttpClient());
