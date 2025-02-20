import { Box } from '@/components/core/Box';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';

interface Props {
  media: string;
  mediaLength?: string;
}

export function MediaPic({ media, mediaLength }: Props) {
  return (
    <Box className='relative'>
      <Image className='border-[1px] rounded-sm border-neutral-500' src={media} width={150} height={84} />
      <Typography
        className='px-1 mx-1 rounded-sm my-0.5 absolute bottom-0.5 left-0 bg-neutral-gray'
        variant='text-caption'
      >
        {mediaLength}
      </Typography>
    </Box>
  );
}
