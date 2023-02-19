import TitleSection from '@/components/title_section';
import styles from './Vision.module.scss';
import { Animate } from 'react-simple-animate';
import { useRef } from 'react';
import { useIsInViewPort } from '@/core/hook/useIsInViewPort';

const Vision = () => {
  const visionRef = useRef();
  const isInView = useIsInViewPort(visionRef);

  return (
    <div className={styles.root} id="vision" ref={visionRef}>
      <div className={styles.content_w}>
        <div>
          <Animate
            play={Boolean(isInView)}
            duration={1}
            start={{
              opacity: '0',
              transform: 'translateY(400px)',
            }}
            end={{
              opacity: '1',
              transform: 'translateY(0)',
            }}>
            <div>
              <div>
                <TitleSection title={'Vision'} />
              </div>
              <div className={styles.content}>
                Open Factor Foundation commits to supporting the young people of Vietnam in creating inclusive and impactful AI solutions that can benefit a wide range of industries and sectors. Our goal is to provide comprehensive and practical guidance and best practices that will help to empower these young people, allowing them to utilize AI in creative and innovative ways that are specifically designed to meet the unique needs of the Vietnamese market.
              </div>
            </div>
          </Animate>
        </div>
        <Animate
          play={Boolean(isInView)}
          duration={1}
          start={{
            transform: 'translateX(400px)',
          }}
          end={{
            transform: 'translateX(0)',
          }}>
          <div className={styles.img}></div>
        </Animate>
      </div>
    </div>
  );
};

export default Vision;
