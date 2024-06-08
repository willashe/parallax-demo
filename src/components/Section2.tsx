import prefix from '@/utils/prefix';
import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';

/* Define Animations */
const bgTranslateY = interpolate([0, 0.5, 1], [600, 0, -2200], {
  ease: [easeOut, easeIn],
});
const prllxOpacity = interpolate([0.25, 0.5, 0.6], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const prllxTranslateY = interpolate([0, 0.5, 1], [1200, 0, -2400], {
  ease: [easeOut, easeIn],
});
const ownItOpacity = interpolate([0.36, 0.5, 0.72], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const ownItTranslateY = interpolate([0, 0.5, 1], [2000, 0, -1600], {
  ease: [easeOut, easeIn],
});
const logoTranslateY = interpolate([0, 0.5, 1], [2200, 0, -1400], {
  ease: [easeOut, easeIn],
});

interface Section2Props {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const Section2 = ({ progress, onProgressChange }: Section2Props) => (
  <div className={styles.stickySectionContainer}>
    <Parallax
      className={`${styles.section} ${styles.stickySection}`}
      onProgressChange={(progress) => onProgressChange(progress)}
      // TODO: the line below should be equivalent to the line above but it seems to cause Parallax to register progress even when the div itself isn't moving across the viewport, let's figure out why!
      //   onProgressChange={(progress) => onProgressChange(progress)}
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
          PRLLX.
        </div>
        <div
          className={`${styles.headerText} ${styles.gradientText}`}
          style={{
            opacity: ownItOpacity(progress),
            transform: `translateY(${ownItTranslateY(progress)}px)`,
          }}
        >
          Live For Music.
        </div>
        <img
          src={`${prefix()}/images/L-2.webp`}
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

export default Section2;
