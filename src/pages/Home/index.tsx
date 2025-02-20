import { Box } from '@/components/core/Box';
import { EpisodeInfo } from '@/components/pages/Home/EpisodeInfo';
import { HeaderContent } from '@/components/pages/Home/HeaderContent';
import { headerContent } from '@/mock/headerMockData';
import { useEffect, useState } from 'react';

const backgroundHeight = 132;
function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
          height: `${backgroundHeight}px`,
          backgroundImage: `url(/img/sex-life.jpg)`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#efefef',
          boxShadow: 'inset 0 0 80px rgba(0, 0, 0, 0.7)'
        }}
      />
      <Box className='px-2'>
        <HeaderContent headerContent={headerContent} />
      </Box>
      <Box className='py-5'>
        <EpisodeInfo />
      </Box>
    </>
  );
}
export default Home;
