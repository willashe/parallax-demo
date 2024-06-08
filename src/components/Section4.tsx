import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';

/* Define Animations */
const bgTranslateY = interpolate([0, 0.5, 1], [600, 0, -3000], {
  ease: [easeOut, easeIn],
});
const prllxOpacity = interpolate([0.25, 0.5, 0.8], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const prllxTranslateY = interpolate([0, 0.5, 1], [1200, 0, -2400], {
  ease: [easeOut, easeIn],
});

interface Section4Props {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const Section4 = ({ progress, onProgressChange }: Section4Props) => (
  <div className={styles.stickySectionContainer}>
    <Parallax
      className={`${styles.section} ${styles.stickySection}`}
      onProgressChange={(progress) => onProgressChange(progress)}
    >
      <div className={styles.sectionBgImgContainer}>
        <Image
          src="/images/section-1-bg.webp"
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
          style={{
            height: '100%',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <img
            src="/images/device-mock.webp"
            style={{
              opacity: prllxOpacity(progress),
              transform: `translateY(${prllxTranslateY(progress)}px)`,
              maxWidth: '100%',
            }}
            alt=""
          />
        </div>
      </div>
    </Parallax>
  </div>
);

export default Section4;
