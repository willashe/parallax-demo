import { easeIn, easeInOut, easeOut, interpolate, linear } from 'popmotion';
import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from '../parallax.module.css';

/* Define Animations */
const badgeTranslateY = (endY: number) =>
  interpolate([0, 0.45, 0.55, 1], [150, 68, 68, endY], {
    ease: [easeOut, linear, easeInOut],
  });
const badgeTranslateX = interpolate([0, 0.45, 0.55, 1], [27, 27, 27, 3], {
  ease: [linear, linear, easeInOut],
});
const badgeOpacity = interpolate([0, 0.5, 1], [0, 1, 1], {
  ease: [easeIn, linear],
});
const badgeScale = interpolate([0, 0.5, 1], [1.5, 1.5, 1], {
  ease: [linear, easeInOut],
});
const lineOpacity = interpolate([0, 0.75, 1], [0, 0, 1], {
  ease: [linear, easeInOut],
});
const lineHeight = interpolate([0, 0.75, 1], [0, 0, 4], {
  ease: [linear, easeInOut],
});
const bottomLineHeight = interpolate([0, 0.75, 1], [0, 0, 6], {
  ease: [linear, easeInOut],
});

const badgeAttributes = [
  {
    img: 'badge-play.webp',
    endY: 10,
  },
  {
    img: 'badge-royalty.webp',
    endY: 30,
  },
  {
    img: 'badge-service.webp',
    endY: 50,
  },
  {
    img: 'badge-rewards.webp',
    endY: 70,
  },
];

interface BadgeProps {
  index: number;
}

const Badge = ({ index }: BadgeProps) => {
  const [badgeProgress, setBadgeProgress] = useState<number>(0);
  const { img, endY } = badgeAttributes[index];

  return (
    <>
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          height: '110vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div
          className={styles.sectionContent}
          style={{ alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <div
            className={styles.roadmapBadge}
            style={{
              top: `${badgeTranslateY(endY)(badgeProgress)}vh`,
              left: `${badgeTranslateX(badgeProgress)}%`,
              opacity: badgeOpacity(badgeProgress),
              transform: `scale(${badgeScale(badgeProgress)})`,
            }}
          >
            <img
              src={`/images/${img}`}
              className={styles.roadmapBadgeImg}
              alt=""
            />
          </div>
          <div
            className={styles.roadmapLineContainer}
            style={{
              top: `${endY + 15}vh`,
            }}
          >
            <div
              className={styles.roadmapLine}
              style={{
                height:
                  index === 3
                    ? `${bottomLineHeight(badgeProgress)}vh`
                    : `${lineHeight(badgeProgress)}vh`,
                opacity: lineOpacity(badgeProgress),
              }}
            >
              {index === 3 && (
                <img
                  src="/images/arrow.webp"
                  className={styles.roadmapLineArrow}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Parallax onProgressChange={(progress) => setBadgeProgress(progress)} />
    </>
  );
};

export default Badge;
