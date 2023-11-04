export interface DeleteSecureStorage {
  delete: (key: string) => Promise<void>;
}
