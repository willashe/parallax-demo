import useWindowSize from '@/hooks/useWindowSize';
import prefix from '@/utils/prefix';
import Image from 'next/image';
import { easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';
import { theme } from './theme';

/* Define Animations */
const bgTranslateY = interpolate([0, 1], [800, 0], {
  ease: easeOut,
});
const partnerHeaderOpacity = interpolate([0.2, 0.5, 1], [0, 1, 0], {
  ease: easeOut,
});
const partnerHeaderTranslateY = interpolate([0.2, 0.5, 1], [400, 0, -700], {
  ease: easeOut,
});
const logo1Opacity = interpolate([0.25, 0.5, 1], [0, 1, 0], {
  ease: easeOut,
});
const logo1TranslateY = interpolate([0.25, 0.5, 1], [500, 0, -600], {
  ease: easeOut,
});
const logo2Opacity = interpolate([0.3, 0.5, 1], [0, 1, 0], {
  ease: easeOut,
});
const logo2TranslateY = interpolate([0.3, 0.5, 1], [500, 0, -500], {
  ease: easeOut,
});
const logo3Opacity = interpolate([0.35, 0.5, 1], [0, 1, 0], {
  ease: easeOut,
});
const logo3TranslateY = interpolate([0.35, 0.5, 1], [500, 0, -400], {
  ease: easeOut,
});
const logo4Opacity = interpolate([0.4, 0.5, 1], [0, 1, 0], {
  ease: easeOut,
});
const logo4TranslateY = interpolate([0.4, 0.5, 1], [500, 0, -300], {
  ease: easeOut,
});
const line2Opacity = interpolate([0.46, 0.5], [0, 1], {
  ease: easeOut,
});
const line2TranslateY = interpolate([0.43, 0.5], [500, 0], {
  ease: easeOut,
});

interface BottomSectionProps {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const BottomSection = ({ progress, onProgressChange }: BottomSectionProps) => {
  const windowSize = useWindowSize();

  return (
    <div className={styles.stickySectionContainer}>
      <Parallax
        className={`${styles.section} ${styles.stickySection}`}
        onProgressChange={(progress) => onProgressChange(progress)}
      >
        <div className={styles.sectionBgImgContainer}>
          <Image
            src={`${prefix()}/images/bottom-section-bg.webp`}
            className={styles.sectionBgImg}
            style={{
              transform: `translateY(${bgTranslateY(progress)}px)`,
            }}
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div
          className={`${styles.sectionContent} ${styles.bottomSectionContent}`}
          style={{
            padding:
              windowSize.width < theme.breakpoints.lg
                ? `0px 1rem ${theme.playerWidgetMobileHeight}rem`
                : `${theme.headerHeight}px 4rem ${theme.playerWidgetDesktopHeight}rem`,
          }}
        >
          <div style={{ width: '100%' }}>
            <h4
              style={{
                opacity: partnerHeaderOpacity(progress),
                transform: `translateY(${partnerHeaderTranslateY(progress)}px)`,
                willChange: 'opacity, transform',
              }}
            >
              Partners:
            </h4>
            <div className={styles.partnerLogoContainer}>
              <div className={styles.partnerLogo}>
                <Image
                  src={`${prefix()}/images/sponsor-logo.webp`}
                  className={styles.partnerLogoImage}
                  alt=""
                  style={{
                    opacity: logo1Opacity(progress),
                    transform: `translateY(${logo1TranslateY(progress)}px)`,
                  }}
                  fill
                  sizes="100%"
                />
              </div>
              <div className={styles.partnerLogo}>
                <Image
                  src={`${prefix()}/images/sponsor-logo.webp`}
                  className={styles.partnerLogoImage}
                  alt=""
                  style={{
                    opacity: logo2Opacity(progress),
                    transform: `translateY(${logo2TranslateY(progress)}px)`,
                  }}
                  fill
                  sizes="100%"
                />
              </div>
              <div className={styles.partnerLogo}>
                <Image
                  src={`${prefix()}/images/sponsor-logo.webp`}
                  className={styles.partnerLogoImage}
                  alt=""
                  style={{
                    opacity: logo3Opacity(progress),
                    transform: `translateY(${logo3TranslateY(progress)}px)`,
                  }}
                  fill
                  sizes="100%"
                />
              </div>
              <div className={styles.partnerLogo}>
                <Image
                  src={`${prefix()}/images/sponsor-logo.webp`}
                  className={styles.partnerLogoImage}
                  alt=""
                  style={{
                    opacity: logo4Opacity(progress),
                    transform: `translateY(${logo4TranslateY(progress)}px)`,
                  }}
                  fill
                  sizes="100%"
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className={`${styles.subHeaderText} ${styles.gradientText}`}
              style={{
                opacity: line2Opacity(progress),
                transform: `translateY(${line2TranslateY(progress)}px)`,
                marginTop:
                  windowSize.width < theme.breakpoints.lg ? undefined : '2rem',
              }}
            >
              PRLLX. Live For Music.
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
export default BottomSection;
