import prefix from '@/utils/prefix';
import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';

/* Define Animations */
const bgTranslateY = interpolate([0, 0.5, 1], [600, 0, -2200], {
  ease: [easeOut, easeIn],
});
const ownOpacity = interpolate([0.25, 0.5, 0.57], [0, 1, 0], {
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

interface Section6Props {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const Section6 = ({ progress, onProgressChange }: Section6Props) => (
  <div className={styles.stickySectionContainer}>
    <Parallax
      className={`${styles.section} ${styles.stickySection}`}
      onProgressChange={(progress) => onProgressChange(progress)}
    >
      <div className={styles.sectionBgImgContainer}>
        <Image
          src={`${prefix()}/images/section-3-bg.webp`}
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
          Connect.
        </div>
        <p
          style={{
            opacity: paragraphOpacity(progress),
            transform: `translateY(${paragraphTranslateY(progress)}px)`,
          }}
        >
          We{'’'}re purpose-built on the PRLLX blockchain so you can connect
          your music wherever and however you want. Bring your music into the
          Metaverse. Sell it on OpenSea. The PRLLX Music app and player allows
          you to play your music NFTs on the go, no matter where you purchased
          them.
        </p>
        <p
          style={{
            opacity: paragraphOpacity(progress),
            transform: `translateY(${paragraphTranslateY(progress)}px)`,
          }}
        >
          PRLLX. Live For Music.
        </p>
        <p
          style={{
            opacity: paragraphOpacity(progress),
            transform: `translateY(${paragraphTranslateY(progress)}px)`,
          }}
        >
          Join our e-mail list for the latest launch updates and Artist Drops.
        </p>
        <img
          src={`${prefix()}/images/L-4.webp`}
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

export default Section6;
