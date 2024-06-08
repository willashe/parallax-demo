'use client';

import ParallaxDemo from '@/components';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function ParallaxDemoPage() {
  return (
    <ParallaxProvider>
      <ParallaxDemo />
    </ParallaxProvider>
  );
}
