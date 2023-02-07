'use client';

import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Poppins } from '@next/font/google';
import { Toaster } from 'react-hot-toast';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const activeChainId = ChainId.Mumbai;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {' '}
        <ThirdwebProvider desiredChainId={activeChainId}>
          <main className={poppins.className}>
            <ThemeProvider>
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </main>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
