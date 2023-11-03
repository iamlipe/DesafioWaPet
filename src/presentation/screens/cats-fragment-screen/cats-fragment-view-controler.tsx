import { PetModel } from '@/domain/models';
import { makeRemoteGetCats } from '@/main/factories/usecases';
import { removeDuplicatesPet } from '@/presentation/helpers/';
import { useState, useEffect, useCallback } from 'react';

export function useCatsFragmentsViewController() {
  const [page, setPage] = useState(1);
  const [cats, setCats] = useState<PetModel[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCats = useCallback(async () => {
    try {
      setIsLoading(true);

      const remoteCats = makeRemoteGetCats({
        page: page.toString(),
        limit: '10',
        has_breeds: 'true',
      });

      const response = await remoteCats.excute();

      setCats(curr =>
        removeDuplicatesPet(curr === null ? [...response] : [...curr, ...response], 'id'),
      );
      setPage(curr => curr + 1);
      setError('');
    } catch (e) {
      setError('something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    handleCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    cats,
    isLoading,
    handleCats,
  };
}
