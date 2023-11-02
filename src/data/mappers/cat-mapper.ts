import { PetModel } from '@/domain/models';
import { RemoteCatModel } from '../models';

export class CatMapper {
  static httpToDomain(raw: RemoteCatModel): PetModel {
    return {
      id: raw.id,
      image: raw.url,
      breed: {
        id: raw.breeds[0].id,
        name: raw.breeds[0].name,
        countryCode: raw.breeds[0].country_code,
        lifeSpan: raw.breeds[0].life_span,
        temperament: raw.breeds[0].temperament,
        weight: raw.breeds[0].weight.metric,
      },
    };
  }
}
