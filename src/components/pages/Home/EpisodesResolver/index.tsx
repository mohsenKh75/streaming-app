import { useLocation, useNavigate } from 'react-router-dom';
import { SeasonNav } from './SeasonNav';
import { firstChunkEP, secChunkEP, thChunkEP } from '@/apis/home/endpoints';
import { Episodes } from '@/apis/home/types';
import { useApi } from '@/hooks/useApi';
import { useEffect } from 'react';
import { EpisodesSection } from './EpisodeSection';

export function EpisodesResolver() {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash;
  const {
    request: firstEpisodeRequest,
    data: firstEpisodesData,
    loadMore: firstEpisodeLoadMore,
    pending: pendingFirstEpisode,
    pendingLoadMore: pendingFirstEpisodeMore
  } = useApi<Episodes>({ ep: firstChunkEP });
  const {
    request: secEpisodeRequest,
    data: secEpisodesData,
    pending: pendingSecEpisode,
    loadMore: secEpisodeLoadMore,
    pendingLoadMore: pendingSecEpisodeMore
  } = useApi<Episodes>({ ep: secChunkEP });
  const {
    request: thEpisodeRequest,
    data: thEpisodesData,
    pending: pendingThEpisode,
    loadMore: thEpisodeLoadMore,
    pendingLoadMore: pendingThEpisodeMore
  } = useApi<Episodes>({ ep: thChunkEP });

  useEffect(() => {
    firstEpisodeRequest().then(() => navigate('#1'));
  }, []);

  useEffect(() => {
    if (hash === '#1') {
      firstEpisodeRequest();
    }
    if (hash === '#2') {
      secEpisodeRequest();
    }
    if (hash === '#3') {
      thEpisodeRequest();
    }
  }, [location.hash]);

  return (
    <>
      <SeasonNav />
      {hash === '#1' && firstEpisodesData && (
        <EpisodesSection
          pending={pendingFirstEpisode}
          pendingLoadMore={pendingFirstEpisodeMore}
          loadMore={() =>
            firstEpisodeLoadMore({
              ep: firstChunkEP,
              currentPage: firstEpisodesData?.pager?.current + 1,
              totalPage: firstEpisodesData?.pager?.total
            })
          }
          episodes={firstEpisodesData}
        />
      )}
      {hash === '#2' && secEpisodesData && (
        <EpisodesSection
          pendingLoadMore={pendingSecEpisodeMore}
          pending={pendingSecEpisode}
          loadMore={() =>
            secEpisodeLoadMore({
              ep: secChunkEP,
              currentPage: secEpisodesData?.pager?.current + 1,
              totalPage: secEpisodesData?.pager?.total
            })
          }
          episodes={secEpisodesData}
        />
      )}
      {hash === '#3' && thEpisodesData && (
        <EpisodesSection
          pendingLoadMore={pendingThEpisodeMore}
          pending={pendingThEpisode}
          loadMore={() =>
            thEpisodeLoadMore({
              ep: thChunkEP,
              currentPage: thEpisodesData?.pager?.current + 1,
              totalPage: thEpisodesData?.pager?.total
            })
          }
          episodes={thEpisodesData}
        />
      )}
    </>
  );
}
