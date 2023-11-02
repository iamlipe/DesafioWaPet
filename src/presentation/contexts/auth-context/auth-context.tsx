import React, { useState, createContext, useEffect, useCallback } from 'react';
import { getCurrentAccountAdapter } from '@/main/adapters';

import { AuthContextInterface } from './types';
import { AccountModel } from '@/domain/models';

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
  isLoading: false,
  login: () => {},
  loggout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<AccountModel | null>(null);

  const isLogged = useCallback(async () => {
    try {
      const userAccount = await getCurrentAccountAdapter();
      const parseUserAccount = JSON.parse(userAccount);
      setUser(parseUserAccount);
    } catch (error) {
      // NOTE: DO SOMETHING
    } finally {
      setIsLoading(false);
    }
  }, []);

  function loggout() {
    setUser(null);
    setIsLoading(false);
  }

  function login(account: AccountModel) {
    setUser(account);
    setIsLoading(false);
  }

  useEffect(() => {
    isLogged();
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLoading, user, login, loggout }}>
      {children}
    </AuthContext.Provider>
  );
};
