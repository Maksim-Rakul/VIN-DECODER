import { useEffect, useState } from "react";

export const useFetchWithParams = <T, P>(
  callback: (params: P) => Promise<T>,
  params: P
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await callback(params);
        setData(res);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [params]);

  return { isLoading, isError, data };
};