import { AccountModel } from '@/domain/models';

export interface AuthContextInterface {
  user?: AccountModel | null;
  isLoading: boolean;
  login: (user: AccountModel) => void;
  logout: () => void;
}
