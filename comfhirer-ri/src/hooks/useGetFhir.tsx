import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function getFhir(file: File | null | undefined) {
  if (!file) return;
  const url = '/api/v1/fhir';
  const body = new FormData();
  body.append('prescription', file);
  const result = await axios.post(url, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    baseURL: 'http://localhost:5500',
  });

  return result.data;
}

function useGetFhir(file: File | null | undefined, name: string | undefined) {
  const { data, isError, error, isLoading, refetch } = useQuery({
    queryKey: ['file', name],
    queryFn: () => getFhir(file),
    enabled: file !== null && file !== undefined,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isError,
    error,
    isLoading,
    refetch,
  };
}

export default useGetFhir;
