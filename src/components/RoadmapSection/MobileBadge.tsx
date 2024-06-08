import { easeIn, easeInOut, easeOut, interpolate, linear } from 'popmotion';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from '../parallax.module.css';

/* Define Animations */
const badgeTranslateY = interpolate([0, 0.45, 0.55, 1], [125, 0, 0, -25], {
  ease: [easeOut, linear, easeInOut],
});
const badgeOpacity = interpolate([0, 0.5, 1], [0, 1, 1], {
  ease: [easeIn, easeOut],
});
const badgeScale = interpolate([0, 0.5, 1], [0.7, 1, 1], {
  ease: [easeInOut, linear],
});
const lineOpacity = interpolate([0, 0.2, 1], [0, 0, 1], {
  ease: [linear, easeInOut],
});

const badgeAttributes = [
  {
    img: 'badge-play.webp',
  },
  {
    img: 'badge-royalty.webp',
  },
  {
    img: 'badge-service.webp',
  },
  {
    img: 'badge-rewards.webp',
  },
];

interface MobileBadgeProps {
  index: number;
}

const MobileBadge = ({ index }: MobileBadgeProps) => {
  const [badgeProgress, setBadgeProgress] = useState<number>(0);
  const { img } = badgeAttributes[index];

  return (
    <Parallax
      className={styles.section}
      onProgressChange={(progress) => setBadgeProgress(progress)}
      style={{
        top: '15vh',
        height: '70vh',
        zIndex: 1,
      }}
    >
      <div
        className={styles.sectionContent}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <div
          className={styles.roadmapBadge}
          style={{
            opacity: badgeOpacity(badgeProgress),
            transform: `scale(${badgeScale(
              badgeProgress,
            )}) translateY(${badgeTranslateY(badgeProgress)}vh)`,
            willChange: 'transform, opacity',
          }}
        >
          <img
            src={`/images/${img}`}
            className={styles.roadmapBadgeImg}
            alt=""
          />
        </div>
        {index !== 3 && (
          <div className={styles.roadmapLineContainer}>
            <div
              className={styles.roadmapLine}
              style={{
                opacity: lineOpacity(badgeProgress),
                willChange: 'opacity',
              }}
            >
              <img
                src="/images/arrow.webp"
                className={styles.roadmapLineArrow}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </Parallax>
  );
};

export default MobileBadge;
