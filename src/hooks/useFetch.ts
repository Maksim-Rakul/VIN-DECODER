import { useEffect, useState } from "react";

export const useFetch = <T>(callback: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const res = await callback();
        setData(res);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [callback]);

  return { isLoading, isError, data };
};