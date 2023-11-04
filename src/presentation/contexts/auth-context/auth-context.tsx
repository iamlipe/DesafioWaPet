import React, { useState, createContext, useEffect, useCallback } from 'react';
import { getCurrentAccountAdapter, deleteCurrentAccountAdapter } from '@/main/adapters';
import { AuthContextInterface } from './types';
import { AccountModel } from '@/domain/models';
import { Alert } from 'react-native';

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
  isLoading: false,
  login: () => {},
  logout: () => {},
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
      Alert.alert('Error', 'Failed to retrieve user');
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, []);

  const logout = async () => {
    try {
      setIsLoading(true);
      setUser(null);
      await deleteCurrentAccountAdapter();
      setIsLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to logout user');
    }
  };

  const login = (account: AccountModel) => {
    setUser(account);
  };

  useEffect(() => {
    isLogged();
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
