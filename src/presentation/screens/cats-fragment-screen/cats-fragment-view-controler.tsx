import { PetModel } from '@/domain/models';
import { makeRemoteGetCats } from '@/main/factories/usecases';
import { useState, useEffect } from 'react';

export function useCatsFragmentsViewController() {
  const [cats, setCats] = useState<PetModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCats() {
    setIsLoading(true);
    const remoteCats = makeRemoteGetCats();

    try {
      const response = await remoteCats.excute();
      setCats(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleCats();
  }, []);

  return {
    cats,
    isLoading,
  };
}
