import prefix from '@/utils/prefix';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import './globals.scss';

const neuePlak = localFont({
  src: [
    {
      path: './NeuePlak-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './NeuePlak-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './NeuePlak-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={neuePlak.className}>
      <body>
        <main
          style={{
            backgroundImage: `url(${prefix()}/images/body-bg.webp)`,
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
