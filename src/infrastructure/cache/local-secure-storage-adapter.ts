import { DeleteSecureStorage, GetSecureStorage, SetSecureStorage } from '@/data/protocols/cache';
import * as SecureStore from 'expo-secure-store';

export class LocalSecureStorageAdapter
  implements GetSecureStorage, SetSecureStorage, DeleteSecureStorage
{
  async set(key: string, value: object): Promise<void> {
    return await SecureStore.setItemAsync(key, JSON.stringify(value));
  }

  async get(key: string): Promise<any> {
    return await SecureStore.getItemAsync(key);
  }

  async delete(key: string): Promise<void> {
    return await SecureStore.deleteItemAsync(key);
  }
}
