import { FakeAuthentication } from '@/data/usecases';
import { Authentication } from '@/domain/usecases';

export const makeFakeAuthentication = (): Authentication => new FakeAuthentication();
