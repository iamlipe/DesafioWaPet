import { PetModel } from '../models/pet-model';

export interface GetDogs {
  excute(): Promise<PetModel[]>;
}
