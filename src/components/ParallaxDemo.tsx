import useWindowSize from '@/hooks/useWindowSize';
import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import BottomSection from './BottomSection';
import { MobileRoadmapSection, RoadmapSection } from './RoadmapSection';
import ScrollPrompt from './ScrollPrompt';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import TopSection from './TopSection';
import styles from './parallax.module.css';
import { theme } from './theme';

/* Define Animations */
const logoContainerTransform = interpolate([0.3, 0.5, 0.8], [800, 0, -1000], {
  ease: [easeOut, easeIn],
});
const topLOpacity = interpolate([0.35, 0.5, 0.6, 0.75], [0, 1, 1, 0]);

const ParallaxDemo = () => {
  const windowSize = useWindowSize();
  const [logoContainerProgress, setLogoContainerProgress] = useState<number>(0);
  const [section1Progress, setSection1Progress] = useState<number>(0);
  const [section2Progress, setSection2Progress] = useState<number>(0);
  const [section3Progress, setSection3Progress] = useState<number>(0);
  const [section4Progress, setSection4Progress] = useState<number>(0);
  const [section5Progress, setSection5Progress] = useState<number>(0);
  const [section6Progress, setSection6Progress] = useState<number>(0);
  const [roadmapSectionProgress, setRoadmapSectionProgress] =
    useState<number>(0);
  const [bottomSectionProgress, setBottomSectionProgress] = useState<number>(0);

  const [showScrollPrompt, setShowScrollPrompt] = useState<boolean>(false);

  // Refreshing from a scrolled position sometime causes jank with parallax elements, this forces a reset
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    } else {
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  useEffect(() => {
    const scrollPromptTimer = setTimeout(() => setShowScrollPrompt(true), 500);

    const hideScrollPrompt = () => {
      setShowScrollPrompt(false);
    };

    addEventListener('scroll', hideScrollPrompt);

    return () => {
      clearTimeout(scrollPromptTimer);
      removeEventListener('scroll', hideScrollPrompt);
    };
  }, []);

  return (
    <>
      <TopSection />

      <div>
        {/* Begin desktop right column "L" image section */}
        <Parallax
          className={styles.logoContainer}
          onProgressChange={setLogoContainerProgress}
        >
          <div
            className={styles.logoInnerContainer}
            style={{
              willChange: 'transform',
              transform: `translateY(${logoContainerTransform(
                logoContainerProgress,
              )}px)`,
            }}
          >
            {/* "L" images to transition between */}
            <div
              className={styles.logoImg}
              style={{
                position: 'relative',
                opacity: 1,
              }}
            >
              <Image
                src="/images/L-1-alt.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(section1Progress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
              <Image
                src="/images/L-8.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(roadmapSectionProgress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
              <Image
                src="/images/L-2.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(section2Progress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
              <Image
                src="/images/L-3.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(section3Progress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
              <Image
                src="/images/L-4.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(section4Progress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
              <Image
                src="/images/L-5.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(section5Progress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
              <Image
                src="/images/L-6.webp"
                style={{
                  willChange: 'opacity',
                  opacity: topLOpacity(section6Progress),
                  objectFit: 'contain',
                  objectPosition: 'top',
                }}
                alt=""
                fill
                sizes="100%"
              />
            </div>
          </div>
        </Parallax>
        {/* End desktop right column "L" image section */}

        <Section1
          progress={section1Progress}
          onProgressChange={setSection1Progress}
        />
        {windowSize.width >= theme.breakpoints.md ? (
          <RoadmapSection
            progress={roadmapSectionProgress}
            onProgressChange={setRoadmapSectionProgress}
          />
        ) : (
          <MobileRoadmapSection
            progress={roadmapSectionProgress}
            onProgressChange={setRoadmapSectionProgress}
          />
        )}
        <Section2
          progress={section2Progress}
          onProgressChange={setSection2Progress}
        />
        <Section3
          progress={section3Progress}
          onProgressChange={setSection3Progress}
        />
        <Section4
          progress={section4Progress}
          onProgressChange={setSection4Progress}
        />
        <Section5
          progress={section5Progress}
          onProgressChange={setSection5Progress}
        />
        <Section6
          progress={section6Progress}
          onProgressChange={setSection6Progress}
        />
      </div>

      <BottomSection
        progress={bottomSectionProgress}
        onProgressChange={setBottomSectionProgress}
      />

      <ScrollPrompt
        containerStyle={{
          position: 'absolute',
          bottom: `calc(${
            windowSize.width >= theme.breakpoints.lg
              ? theme.playerWidgetDesktopHeight
              : theme.playerWidgetMobileHeight
          }rem + 42px)`,
          right: '50%',
          transform: 'translateX(50%)',
          opacity: showScrollPrompt ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      />
    </>
  );
};

export default ParallaxDemo;
