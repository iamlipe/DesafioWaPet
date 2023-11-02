import { GetCats } from '@/domain/usecases';
import { RemoteGetCats } from '@/data/usecases';
import { makeApiUrl, makeAxiosHttpClient } from '../http';
import { BASE_CAT_API } from '@env';

export const makeRemoteGetCats = (): GetCats =>
  new RemoteGetCats(
    makeApiUrl(BASE_CAT_API, '/images/search', {
      limit: '10',
      has_breeds: 'true',
    }),
    makeAxiosHttpClient(),
  );
