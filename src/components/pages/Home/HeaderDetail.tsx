import { ASSETS } from '@/assets';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { HeaderContentTypes } from '@/mock/headerMockData';

interface Props {
  headerContent: HeaderContentTypes;
}
export function HeaderDetail({ headerContent }: Props) {
  return (
    <GridContainer alignItems='items-center' direction='flex-col'>
      <GridContainer xSpacing='space-x-1'>
        <GridContainer className='max-h-[20px]'>
          <Image src={ASSETS.like} width={20} height={20} />
          <Typography variant='text-caption'>{headerContent.userRating} . </Typography>
        </GridContainer>
        <GridContainer className='max-h-[20px]'>
          <Image src={ASSETS.imdb} width={20} height={20} />
          <Typography variant='text-caption'>
            {headerContent.imdbRating} . {headerContent.duration} دقیقه . {headerContent.releaseYears}(
            {headerContent.status}) . {headerContent.country}
          </Typography>
        </GridContainer>
      </GridContainer>

      <GridContainer xSpacing='space-x-1'>
        <Typography variant='text-caption'>
          . {headerContent.seasons} فصل ({headerContent.episodes} قسمت) . {headerContent.language} .{' '}
          {headerContent.ageRating}
        </Typography>
      </GridContainer>
    </GridContainer>
  );
}
