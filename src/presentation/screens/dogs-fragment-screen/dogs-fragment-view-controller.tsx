import { PetModel } from '@/domain/models';
import { makeRemoteGetDogs } from '@/main/factories/usecases';
import { useState, useEffect } from 'react';

export function useDogsFragmentsViewController() {
  const [dogs, setDogs] = useState<PetModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDogs() {
    setIsLoading(true);
    const remoteDogs = makeRemoteGetDogs();

    try {
      const response = await remoteDogs.excute();

      setDogs(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleDogs();
  }, []);

  return {
    dogs,
    isLoading,
  };
}
