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
        <main>{children}</main>
      </body>
    </html>
  );
}
