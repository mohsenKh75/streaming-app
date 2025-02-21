import { apiHandler } from '@/utils/apiHandler';
import { useCallback, useState } from 'react';

interface Props<T> {
  ep: string;
}
export function useApi<T>({ ep }: Props<T>) {
  const [pending, setPending] = useState(false);
  const [pendingLoadMore, setPendingLoadMore] = useState(false);
  const [data, setData] = useState<T>();

  const request = useCallback(async (): Promise<Awaited<T> | void> => {
    setPending(true);
    try {
      return await apiHandler<T>({ ep }).then((res) => setData(res));
    } finally {
      setPending(false);
    }
  }, [ep]);

  const requestLoadMore = useCallback(async (): Promise<Awaited<T> | void> => {
    setPendingLoadMore(true);
    try {
      // @ts-ignore
      if (data && data?.pager?.current <= data?.pager?.total) {
        return await apiHandler<T>({ ep }).then((res) =>
          setData({
            // @ts-ignore
            items: [...data.items, ...res.items],
            // @ts-ignore
            pager: { ...res.pager, current: data?.pager?.current + 1 }
          })
        );
      }
    } finally {
      setPendingLoadMore(false);
    }
  }, [ep, data]);

  return { request, data, pending, loadMore: requestLoadMore, pendingLoadMore };
}
