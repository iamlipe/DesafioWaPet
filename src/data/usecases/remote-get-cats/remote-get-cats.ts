import { RemoteCatModel } from '@/data/models/';
import { HttpClient, HttpStatusCode } from '@/data/protocols/http';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { GetCats } from '@/domain/usecases/get-cats';
import { PetModel } from '@/domain/models';
import { CatMapper } from '@/data/mappers/cat-mapper';
import { KEY_CAT_API } from '@env';

export class RemoteGetCats implements GetCats {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteCatModel[]>,
  ) {}

  async excute(): Promise<PetModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET',
      headers: {
        'x-api-key': KEY_CAT_API,
      },
    });

    const remoteCats = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK:
        return remoteCats.map(CatMapper.httpToDomain);
      case HttpStatusCode.UNAUTHORIZED:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
