import prefix from '@/utils/prefix';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Will Ashe',
  description: 'Will Ashe - Software Engineer - Austin, TX',
};

export default function ParallaxDemoLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
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
