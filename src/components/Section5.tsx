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
const paragraphTranslateY = interpolate([0, 0.5, 1], [1500, 0, -2400], {
  ease: [easeOut, easeIn],
});
const logoTransform = interpolate([0, 0.5, 1], [2200, 0, -1400], {
  ease: [easeOut, easeIn],
});

interface Section5Props {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const Section5 = ({ progress, onProgressChange }: Section5Props) => (
  <div className={styles.stickySectionContainer}>
    <Parallax
      className={`${styles.section} ${styles.stickySection}`}
      onProgressChange={(progress) => onProgressChange(progress)}
    >
      <div className={styles.sectionBgImgContainer}>
        <Image
          src="/images/section-2-bg.webp"
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
          Discover.
        </div>
        <p
          style={{
            opacity: paragraphOpacity(progress),
            transform: `translateY(${paragraphTranslateY(progress)}px)`,
            zIndex: 1,
          }}
        >
          PRLLX Music offers a consistent NFT offering of the newest and best
          music from your favorite artists in all genres as well as special
          collectibles and unreleased music to compliment your collection. The
          PRLLX Music app and player allows you to play your Virtual Vinyl on
          the go, despite where you purchased them. That’s right, we can support
          ANY music NFT that you own.
        </p>
        <img
          src="/images/L-3.webp"
          className={`${styles.logoImg} ${styles.removeMdUp}`}
          style={{
            transform: `translateY(${logoTransform(progress)}px)`,
          }}
          alt=""
        />
      </div>
    </Parallax>
  </div>
);

export default Section5;
