import { setCurrentAccountAdapter } from '@/main/adapters';
import { makeFakeAuthentication } from '@/main/factories/usecases/';
import { AuthContext } from '@/presentation/contexts';
import { useContext, useState } from 'react';

export function useLoginScreenViewController() {
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAuthenticationFailed, setHasAuthenticationFailed] = useState(false);

  async function handleLogin() {
    setIsLoading(true);
    const fakeAuthentication = makeFakeAuthentication();

    try {
      const response = await fakeAuthentication.execute({
        email: 'felipe@waprojects.com.br',
        password: '12345678',
      });

      await setCurrentAccountAdapter(response.data);
      login(response.data);
    } catch (error) {
      setHasAuthenticationFailed(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    handleLogin,
    isLoading,
    hasAuthenticationFailed,
  };
}
