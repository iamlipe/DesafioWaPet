import { PetModel } from '../models/pet-model';

export interface GetCats {
  excute(): Promise<PetModel[]>;
}
