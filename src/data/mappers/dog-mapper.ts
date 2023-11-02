import { PetModel } from '@/domain/models';
import { RemoteDogModel } from '../models';

export class DogMapper {
  static httpToDomain(raw: RemoteDogModel): PetModel {
    return {
      id: raw.id,
      image: raw.url,
      breed: {
        id: raw.breeds[0].id.toString(),
        name: raw.breeds[0].name,
        countryCode: raw.breeds[0].country_code,
        lifeSpan: raw.breeds[0].life_span,
        temperament: raw.breeds[0].temperament,
        weight: raw.breeds[0].weight.metric,
      },
    };
  }
}
