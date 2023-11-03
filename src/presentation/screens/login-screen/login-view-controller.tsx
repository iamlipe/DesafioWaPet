import { useCallback, useContext, useState } from 'react';
import { setCurrentAccountAdapter } from '@/main/adapters';
import { makeFakeAuthentication } from '@/main/factories/usecases/';
import { AuthContext } from '@/presentation/contexts';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Alert } from 'react-native';
import loginSchema, { FormLogin } from '@/main/validators/login';

export function useLoginScreenViewController() {
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = useCallback(
    async (data: FormLogin) => {
      setIsLoading(true);
      const fakeAuthentication = makeFakeAuthentication();

      try {
        const response = await fakeAuthentication.execute({
          email: data.email,
          password: data.password,
        });

        await setCurrentAccountAdapter(response.data);

        login(response.data);
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert('Error', 'An error occurred: ' + error.message);
        } else {
          Alert.alert('Error', 'Oops, something went wrong. Please try again.');
        }
      } finally {
        setIsLoading(false);
      }
    },
    [login],
  );

  const { handleChange, handleSubmit, values, errors, submitCount } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: toFormikValidationSchema(loginSchema),
  });

  return {
    handleSubmit,
    handleChange,
    values,
    errors,
    submitCount,
    isLoading,
  };
}
