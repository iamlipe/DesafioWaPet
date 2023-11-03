import { PetModel } from '@/domain/models';
import { makeRemoteGetDogs } from '@/main/factories/usecases';
import { removeDuplicatesPet } from '@/presentation/helpers';
import { useState, useEffect, useCallback } from 'react';

export function useDogsFragmentsViewController() {
  const [page, setPage] = useState(1);
  const [dogs, setDogs] = useState<PetModel[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDogs = useCallback(async () => {
    try {
      setIsLoading(true);
      const remoteDogs = makeRemoteGetDogs({
        page: page.toString(),
        limit: '10',
        has_breeds: 'true',
      });

      const response = await remoteDogs.excute();

      setDogs(curr => removeDuplicatesPet([...curr, ...response], 'id'));
      setPage(curr => curr + 1);
      setError('');
    } catch (e) {
      setError('something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    handleDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    dogs,
    isLoading,
    error,
    handleDogs,
  };
}
