import { GetDogs } from '@/domain/usecases';
import { RemoteGetDogs } from '@/data/usecases/remote-get-dogs/remote-get-dogs';
import { makeApiUrl, makeAxiosHttpClient } from '../http';
import { BASE_DOG_API } from '@env';

export const makeRemoteGetDogs = (params?: Record<string, string>): GetDogs =>
  new RemoteGetDogs(makeApiUrl(BASE_DOG_API, '/images/search', params), makeAxiosHttpClient());
