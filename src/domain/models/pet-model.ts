export interface PetModel {
  id: string;
  image: string;
  breed: Breed;
}

interface Breed {
  id: string;
  weight: string;
  name: string;
  countryCode: string;
  lifeSpan: string;
  temperament: string;
}
