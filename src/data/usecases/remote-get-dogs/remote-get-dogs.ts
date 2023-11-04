import { RemoteDogModel } from '@/data/models';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { UnauthorizedError, UnexpectedError } from '@/domain/errors';
import { GetDogs } from '@/domain/repositories';
import { PetModel } from '@/domain/models/';
import { DogMapper } from '@/data/mappers';
import { KEY_DOG_API } from '@env';

export class RemoteGetDogs implements GetDogs {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteDogModel[]>,
  ) {}

  async excute(): Promise<PetModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET',
      headers: {
        'x-api-key': KEY_DOG_API,
      },
    });

    const remoteDogs = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return remoteDogs.map(DogMapper.httpToDomain);
      case HttpStatusCode.UNAUTHORIZED:
        throw new UnauthorizedError();
      default:
        throw new UnexpectedError();
    }
  }
}
