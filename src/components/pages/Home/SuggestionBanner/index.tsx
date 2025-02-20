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
      <HorizontalScroll>
        {banners.map((banner) => (
          <Image className='mx-5 rounded-md' src={banner} />
        ))}
      </HorizontalScroll>
    </>
  );
}
