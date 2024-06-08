import Image from 'next/image';
import { easeIn, interpolate } from 'popmotion';
import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import styles from './parallax.module.css';

/* Define Animations */
const bgTranslateY = interpolate([0.5, 1], [0, -1000], { ease: easeIn });
const logoTranslateY = interpolate([0.5, 1], [0, -1000], { ease: easeIn });
const countdownTranslateY = interpolate([0.5, 1], [0, 800], { ease: easeIn });
const countdownScale = interpolate([0.5, 1], [1, 2.5], { ease: easeIn });
const countdownOpacity = interpolate([0.5, 0.75], [1, 0], { ease: easeIn });

const TopSection = () => {
  const [sectionProgress, setSectionProgress] = useState<number>(0);
  const [videoYProgress, setVideoYProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const { paused, readyState } = videoElement;

      if (readyState > 2) {
        if (videoYProgress >= 1) {
          if (!paused) {
            videoElement.pause();
            videoElement.currentTime = 0;
          }
        } else if (paused) {
          videoElement.play();
        }
      }
    }
  }, [videoYProgress, videoRef]);

  return (
    <>
      <Parallax
        className={`${styles.section} ${styles.topSection}`}
        onProgressChange={(progress) => setSectionProgress(progress)}
      >
        <div
          className={`${styles.sectionBgImgContainer} ${styles.topSectionBgImgContainer}`}
        >
          <Image
            src="/images/top-section-bg.webp"
            className={styles.sectionBgImg}
            style={{
              transform: `translateY(${bgTranslateY(sectionProgress)}px)`,
            }}
            alt=""
            fill
            sizes="100vw"
          />
        </div>

        <div
          className={styles.videoContainer}
          style={{
            transform: `translateY(${logoTranslateY(sectionProgress)}px)`,
          }}
        >
          <Parallax
            className={styles.videoInnerContainer}
            onProgressChange={setVideoYProgress}
          >
            <video
              ref={videoRef}
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video/party.mp4" type="video/mp4" />
            </video>
          </Parallax>
        </div>
      </Parallax>
      <div
        className={styles.countdownContainer}
        style={{
          position: 'fixed',
          transform: `translate(-50%, ${countdownTranslateY(
            sectionProgress,
          )}px) scale(${countdownScale(sectionProgress)})`,
          opacity: countdownOpacity(sectionProgress),
        }}
      >
        <div className={styles.countdownText}>PRLLX Music</div>

        <div className={styles.signupButton}>
          <div style={{ margin: '1rem 0 2rem' }}>
            {/* <button
            // variant="tertiary"
            >
              Join Now
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
