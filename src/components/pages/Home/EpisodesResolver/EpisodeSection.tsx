import { Episodes } from '@/apis/home/types';
import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { SeasonNav } from './SeasonNav';
import { MediaPic } from './MediaPic';
import { MediaDetail } from './MediaDetail';
import { Button } from '@/components/core/Button';
import { Loading } from '@/components/core/Loading';

interface Props {
  episodes: Episodes;
  loadMore?: () => void;
  pendingLoadMore?: boolean;
  pending?: boolean;
}
export function EpisodesSection({ episodes, loadMore, pendingLoadMore, pending }: Props) {
  return (
    <Box>
      <GridContainer className='pt-4' direction='flex-col'>
        {episodes?.items?.map((episode) => (
          <GridContainer xSpacing='space-x-2' className='py-2'>
            <MediaPic media={episode.src} mediaLength={episode.length} />
            <MediaDetail episode={episode.episode} rate={episode.rate} season={episode.season} title={episode.title} />
          </GridContainer>
        ))}
      </GridContainer>

      {pendingLoadMore && (
        <Box className='py-2 justify-self-center'>
          <Loading size='large' isLoading />
        </Box>
      )}
      {episodes?.pager?.current < episodes?.pager?.total && (
        <Button onClick={loadMore} className='my-2 justify-self-center' shape='outlined'>
          بیشتر
        </Button>
      )}
    </Box>
  );
}
