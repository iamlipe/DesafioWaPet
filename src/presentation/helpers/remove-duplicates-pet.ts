import { PetModel } from '@/domain/models';

export function removeDuplicatesPet(arr: PetModel[], property: 'id'): PetModel[] {
  return Array.from(new Set(arr.map(obj => obj[property]))).map(id =>
    arr.find(obj => obj[property] === id),
  ) as PetModel[];
}
