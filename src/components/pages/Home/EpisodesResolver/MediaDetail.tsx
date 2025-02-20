import { ASSETS } from '@/assets';
import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';

interface Props {
  title: string;
  season: number;
  episode: number;
  rate: string;
}
export function MediaDetail({ episode, season, title, rate }: Props) {
  return (
    <GridContainer direction='flex-col' className='py-1'>
      <Box className='flex-1'>
        <Typography variant='text-context-caption'>{title}</Typography>
        <Typography color='text-neutral-gray-note' variant='text-context-footnote'>
          {season} فصل {episode} قسمت
        </Typography>
      </Box>
      <GridContainer>
        <Image src={ASSETS.like} width={16} height={16} />
        <Typography variant='text-foot-note' color='text-neutral-gray-note'>
          {rate}
        </Typography>
      </GridContainer>
    </GridContainer>
  );
}
