import { Box } from '../core/Box';
import { Typography } from '../core/Typography';

interface Props {
  title: string;
}
export function CategoryBox({ title }: Props) {
  return (
    <Box className='h-5 rounded-sm px-1' backgroundColor='bg-neutral-gray'>
      <Typography color='text-neutral-pure-white' variant='text-foot-note'>
        {title}
      </Typography>
    </Box>
  );
}
