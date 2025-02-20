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

  const requestLoadMore = useCallback(
    async ({
      ep,
      totalPage,
      currentPage
    }: {
      ep: string;
      totalPage: number;
      currentPage: number;
    }): Promise<Awaited<T> | void> => {
      setPendingLoadMore(true);
      try {
        if (currentPage <= totalPage && data) {
          return await apiHandler<T>({ ep }).then((res) =>
            setData({
              // @ts-ignore
              items: [...data.items, ...res.items],
              // @ts-ignore
              pager: { ...res.pager, current: currentPage }
            })
          );
        }
      } finally {
        setPendingLoadMore(false);
      }
    },
    [ep, data]
  );

  return { request, data, pending, loadMore: requestLoadMore, pendingLoadMore };
}
