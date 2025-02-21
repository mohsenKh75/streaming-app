import { Box } from '@/components/core/Box';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { HorizontalScroll } from '@/components/shared/HorizentalScroll';

interface Props {
  banners: string[];
}
export function SuggestionBanner({ banners }: Props) {
  return (
    <>
      <Typography className='pb-4 mx-4' variant='text-title'>
        فیلم‌های پیشنهادی
      </Typography>
      <Box className='px-2'>
        <HorizontalScroll xSpacing='space-x-2'>
          {banners.map((banner) => (
            <Image className='rounded-md' width={435} height={400} src={banner} />
          ))}
        </HorizontalScroll>
      </Box>
    </>
  );
}
