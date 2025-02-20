import { ASSETS } from '@/assets';
import { Box } from '@/components/core/Box';
import { Button } from '@/components/core/Button';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { ExpandableSection } from '@/components/shared/ExpandableSection/indext';
import { EPISODE_TEXT } from '@/mock/episodeText';

export function EpisodeInfo() {
  return (
    <Box className='px-4'>
      <Button fullSize rightIcon={ASSETS.play}>
        پخش
      </Button>
      <GridContainer className='pt-4' xSpacing='space-x-4' justifyContent='justify-center'>
        <GridContainer xSpacing='space-x-2'>
          <Box className='border rounded-sm p-2' borderColor='border-neutral-dark'>
            <Image src={ASSETS.download} width={24} height={24} />
          </Box>
          <Box className='border rounded-sm p-2' borderColor='border-neutral-dark'>
            <Image src={ASSETS.bookmark} width={24} height={24} />
          </Box>
        </GridContainer>
        <GridContainer xSpacing='space-x-2'>
          <Box className='border rounded-sm p-2' borderColor='border-neutral-dark'>
            <Image src={ASSETS.thumbsUp} width={24} height={24} />
          </Box>
          <Box className='border rounded-sm p-2' borderColor='border-neutral-dark'>
            <Image src={ASSETS.thumbsDown} width={24} height={24} />
          </Box>
        </GridContainer>
      </GridContainer>
      <Box className='pt-2'>
        <ExpandableSection maxLength={80} text={EPISODE_TEXT} />
      </Box>
    </Box>
  );
}
