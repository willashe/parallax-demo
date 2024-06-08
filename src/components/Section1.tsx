import prefix from '@/utils/prefix';
import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';

/* Define Animations */
const bgTranslateY = interpolate([0, 0.5, 1], [1400, 0, -2200], {
  ease: [easeOut, easeIn],
});
const prllxOpacity = interpolate([0.25, 0.5, 0.6], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const prllxTranslateY = interpolate([0, 0.5, 1], [1000, 0, -2400], {
  ease: [easeOut, easeIn],
});
const musicOpacity = interpolate([0.28, 0.5, 0.65], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const musicTranslateY = interpolate([0, 0.5, 1], [1500, 0, -1800], {
  ease: [easeOut, easeIn],
});
const paragraphOpacity = interpolate([0.31, 0.5, 0.7], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const paragraphTranslateY = interpolate([0, 0.5, 1], [2000, 0, -1600], {
  ease: [easeOut, easeIn],
});
const badge1Opacity = interpolate([0.28, 0.5, 0.75], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const badge1TranslateY = interpolate([0.28, 0.5, 1], [500, 0, -1700], {
  ease: [easeOut, easeIn],
});
const line1Opacity = interpolate([0.4, 0.5, 0.75], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const line1Width = interpolate([0.4, 0.5], [0, 100], {
  ease: [easeOut],
});
const badge2Opacity = interpolate([0.32, 0.5, 0.76], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const badge2TranslateY = interpolate([0.32, 0.5, 1], [500, 0, -1600], {
  ease: [easeOut, easeIn],
});
const line2Opacity = interpolate([0.45, 0.5, 0.75], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const line2Width = interpolate([0.45, 0.5], [0, 100], {
  ease: [easeOut],
});
const badge3Opacity = interpolate([0.38, 0.5, 0.77], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const badge3TranslateY = interpolate([0.38, 0.5, 1], [500, 0, -1500], {
  ease: [easeOut, easeIn],
});
const logoTranslateY = interpolate([0, 0.5, 1], [2200, 100, -1400], {
  ease: [easeOut, easeIn],
});

type Section1Props = {
  progress: number;
  onProgressChange: (progress: number) => void;
};

const Section1 = ({ progress, onProgressChange }: Section1Props) => (
  <div className={styles.stickySectionContainer}>
    <Parallax
      className={`${styles.section} ${styles.stickySection}`}
      onProgressChange={(progress) => onProgressChange(progress)}
    >
      <div className={styles.sectionBgImgContainer}>
        <Image
          src={`${prefix()}/images/section-1-bg.webp`}
          className={styles.sectionBgImg}
          style={{
            transform: `translateY(${bgTranslateY(progress)}px)`,
          }}
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className={styles.sectionContent}>
        <div
          className={`${styles.headerText}`}
          style={{
            opacity: prllxOpacity(progress),
            transform: `translateY(${prllxTranslateY(progress)}px)`,
          }}
        >
          PRLLX
        </div>
        <div
          className={`${styles.headerText} ${styles.outlineText}`}
          style={{
            opacity: musicOpacity(progress),
            transform: `translateY(${musicTranslateY(progress)}px)`,
          }}
        >
          Music
        </div>
        <p
          style={{
            opacity: paragraphOpacity(progress),
            transform: `translateY(${paragraphTranslateY(progress)}px)`,
            willChange: 'transform, opacity',
          }}
        >
          <b>PRLLX Music is a revolutionary experience.</b> An immersive journey
          into the world of music where fans are <b>FOREVER.</b>
          <br></br>
          <br></br>
          Both a music player and marketplace, at PRLLX Music, you can gain
          exclusive <b>ACCESS</b> to your favorite artists,
          <b>LISTEN</b> to private music collections, and <b>EXPERIENCE</b>{' '}
          in-real-life moments you’ll never forget… all in one purchase.
        </p>
        <div className={styles.horizontalBadgeContainer}>
          <img
            style={{
              opacity: badge1Opacity(progress),
              transform: `translateY(${badge1TranslateY(progress)}px)`,
            }}
            src={`${prefix()}/images/badge-access.webp`}
            alt=""
          />
          <div className={styles.horizontalBadgeLineContainer}>
            <div
              className={styles.horizontalBadgeLine}
              style={{
                transform: `translateY(${badge1TranslateY(progress)}px)`,
                width: `${line1Width(progress)}%`,
                opacity: line1Opacity(progress),
              }}
            >
              <img
                src={`${prefix()}/images/arrow.webp`}
                className={styles.horizontalBadgeLineArrow}
                alt=""
              />
            </div>
          </div>
          <img
            style={{
              opacity: badge2Opacity(progress),
              transform: `translateY(${badge2TranslateY(progress)}px)`,
            }}
            src={`${prefix()}/images/badge-listen.webp`}
            alt=""
          />
          <div className={styles.horizontalBadgeLineContainer}>
            <div
              className={styles.horizontalBadgeLine}
              style={{
                transform: `translateY(${badge2TranslateY(progress)}px)`,
                width: `${line2Width(progress)}%`,
                opacity: line2Opacity(progress),
              }}
            >
              <img
                src={`${prefix()}/images/arrow.webp`}
                className={styles.horizontalBadgeLineArrow}
                alt=""
              />
            </div>
          </div>
          <img
            style={{
              opacity: badge3Opacity(progress),
              transform: `translateY(${badge3TranslateY(progress)}px)`,
            }}
            src={`${prefix()}/images/badge-experience.webp`}
            alt=""
          />
        </div>
        <img
          src={`${prefix()}/images/L-1-alt.webp`}
          className={`${styles.logoImg} ${styles.removeMdUp}`}
          style={{
            transform: `translateY(${logoTranslateY(progress)}px)`,
          }}
          alt=""
        />
      </div>
    </Parallax>
  </div>
);

export default Section1;
