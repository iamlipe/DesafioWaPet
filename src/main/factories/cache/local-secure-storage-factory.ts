import { LocalSecureStorageAdapter } from '@/infrastructure/cache';

export const makeLocalSecureStorageAdapter = (): LocalSecureStorageAdapter =>
  new LocalSecureStorageAdapter();
