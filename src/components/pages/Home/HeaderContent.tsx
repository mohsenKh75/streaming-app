import { ASSETS } from '@/assets';
import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { CategoryBox } from '@/components/shared/CategoryBox';
import { HeaderContentTypes } from '@/mock/headerMockData';
import { HeaderDetail } from './HeaderDetail';

interface Props {
  headerContent: HeaderContentTypes;
}
export function HeaderContent({ headerContent }: Props) {
  return (
    <GridContainer direction='flex-col' justifyContent='justify-center' alignItems='items-center'>
      <Typography variant='text-title' className='pb-2'>
        {headerContent.title}
      </Typography>
      <HeaderDetail headerContent={headerContent} />
      <GridContainer justifyContent='justify-center' className='pt-2 gap-1' wrap='flex-wrap'>
        {headerContent.genres.map((genre) => (
          <CategoryBox key={genre} title={genre} />
        ))}
      </GridContainer>
    </GridContainer>
  );
}
