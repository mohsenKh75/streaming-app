import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Footer } from './Footer';

export function MainLayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <GridContainer direction='flex-col' className='mx-auto min-h-screen max-w-[480px] h-full' dir='rtl'>
      <Box tag='header'>
        <Header />
      </Box>
      <Box tag='main' className='flex-1 container px-4'>
        {children}
      </Box>
      <Box backgroundColor='bg-neutral-pure-black' tag='footer' className='p-4 text-center'>
        <Footer />
      </Box>
    </GridContainer>
  );
}
export function LayoutWrapper() {
  return (
    <MainLayoutContainer>
      <Outlet />
    </MainLayoutContainer>
  );
}
