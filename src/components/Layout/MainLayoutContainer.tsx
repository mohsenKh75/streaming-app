import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function MainLayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen h-full py-4' dir='rtl'>
      <header className='shadow-md p-4'>
        <Header />
      </header>
      <main className='flex-1 container mx-auto px-4'>{children}</main>
      <footer className='p-4 text-center bg-black'>
        <p>footer</p>
      </footer>
    </div>
  );
}

export function LayoutWrapper() {
  return (
    <MainLayoutContainer>
      <Outlet />
    </MainLayoutContainer>
  );
}
