import prefix from '@/utils/prefix';
import Image from 'next/image';
import { easeIn, easeOut, interpolate } from 'popmotion';
import { Parallax } from 'react-scroll-parallax';

import styles from '../parallax.module.css';
import Badge from './Badge';

/* Define Animations */
const bgTranslateY = interpolate([0, 0.5, 1], [600, 0, -2200], {
  ease: [easeOut, easeIn],
});
const prllxOpacity = interpolate([0.25, 0.5, 0.6], [0, 1, 0], {
  ease: [easeOut, easeIn],
});
const prllxTranslateY = interpolate([0, 0.5, 1], [1000, 0, -2000], {
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

interface RoadmapSectionProps {
  progress: number;
  onProgressChange: (progress: number) => void;
}

const RoadmapSection = ({
  progress,
  onProgressChange,
}: RoadmapSectionProps) => (
  <div style={{ position: 'relative' }} className={styles.removeSmDown}>
    <div
      className={`${styles.stickySectionContainer} ${styles.roadmapSectionContainer}`}
    >
      <Parallax
        className={`${styles.section} ${styles.stickySection}`}
        onProgressChange={(progress) => onProgressChange(progress)}
        style={{ height: '110vh' }}
      >
        <div className={styles.sectionBgImgContainer}>
          <Image
            src={`${prefix()}/images/section-2-bg.webp`}
            className={styles.sectionBgImg}
            style={{
              transform: `translateY(${bgTranslateY(progress)}px)`,
              willChange: 'transform',
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
              opacity: prllxOpacity(progress),
              transform: `translateY(${prllxTranslateY(progress)}px)`,
              willChange: 'transform, opacity',
            }}
          >
            Road
          </div>
          <div
            className={`${styles.headerText} ${styles.outlineText}`}
            style={{
              opacity: musicOpacity(progress),
              transform: `translateY(${musicTranslateY(progress)}px)`,
              willChange: 'transform, opacity',
            }}
          >
            Map
          </div>
          <p
            style={{
              opacity: paragraphOpacity(progress),
              transform: `translateY(${paragraphTranslateY(progress)}px)`,
              willChange: 'transform, opacity',
            }}
          >
            We{'’'}ve got big plans to keep improving and building upon the core
            of what PRLLX Music has to offer. Over the course of the next few
            months after launch, you can expect to see an evolution from our
            Beta site to a fully functioning platform, inclusive of some key
            milestones:
          </p>
        </div>
      </Parallax>

      <div
        className={`${styles.stickySectionContainer} ${styles.roadmapBadgesContainer}`}
      >
        <Badge index={0} />
        <Badge index={1} />
        <Badge index={2} />
        <Badge index={3} />
      </div>
    </div>
  </div>
);

export default RoadmapSection;
