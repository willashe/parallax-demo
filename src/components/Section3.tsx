import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';

/* Define Animations */
const bgTranslateY = interpolate([0, 0.5, 1], [600, 0, -2200], {
  ease: [easeOut, easeIn],
});
const ownOpacity = interpolate([0.25, 0.5, 0.6], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const ownTranslateY = interpolate([0, 0.5, 1], [1200, 0, -2400], {
  ease: [easeOut, easeIn],
});
const paragraphOpacity = interpolate([0.28, 0.5, 0.66], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const paragraphTranslateY = interpolate([0, 0.5, 1], [1700, 0, -2200], {
  ease: [easeOut, easeIn],
});
const tileContainerOpacity = interpolate([0.38, 0.5, 0.73], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const tileContainerTranslateY = interpolate([0, 0.5, 1], [1900, 0, -1800], {
  ease: [easeOut, easeIn],
});

interface Section3Props {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const Section3 = ({ progress, onProgressChange }: Section3Props) => (
  <div className={styles.stickySectionContainer}>
    <Parallax
      className={`${styles.section} ${styles.stickySection}`}
      onProgressChange={(progress) => onProgressChange(progress)}
    >
      <div className={styles.sectionBgImgContainer}>
        <Image
          src="/images/section-3-bg.webp"
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
          className={styles.headerText}
          style={{
            opacity: ownOpacity(progress),
            transform: `translateY(${ownTranslateY(progress)}px)`,
          }}
        >
          Build.
        </div>
        <p
          style={{
            opacity: paragraphOpacity(progress),
            transform: `translateY(${paragraphTranslateY(progress)}px)`,
            willChange: 'transform, opacity',
          }}
        >
          PRLLX Music makes it easy to get started with NFTs AKA Virtual Vinyl
          building a collection filled with your favorite artists while also
          discovering new ones. The best part is that you own what you buy. It’s
          not a stream, it’s not a leased or borrowed version. It’s yours,
          forever. PRLLX Music will never force you to connect a cryptocurrency
          wallet to explore the platform, and will keep all your assets safe in
          your collection.
        </p>
        <div
          className={styles.tileContainer}
          style={{
            opacity: tileContainerOpacity(progress),
            transform: `translateY(${tileContainerTranslateY(progress)}px)`,
            willChange: 'transform, opacity',
          }}
        >
          <img src="/images/tile1.webp" className={styles.tileImg} alt="" />
          <img src="/images/tile2.webp" className={styles.tileImg} alt="" />
          <img src="/images/tile3.webp" className={styles.tileImg} alt="" />
          <img src="/images/tile4.webp" className={styles.tileImg} alt="" />
          <img src="/images/tile5.webp" className={styles.tileImg} alt="" />
          <img src="/images/tile6.webp" className={styles.tileImg} alt="" />
        </div>
      </div>
    </Parallax>
  </div>
);

export default Section3;
