import TitleSection from '@/components/title_section';
import styles from './mission.module.scss';
import { Animate } from 'react-simple-animate';
import { useIsInViewPort } from '@/core/hook/useIsInViewPort';
import { useRef } from 'react';

const Mission = () => {
  const missionRef = useRef();
  const isInView = useIsInViewPort(missionRef);

  return (
    <div className={styles.root} ref={missionRef}>
      <div className={styles.content_w}>
        <Animate
          play={Boolean(isInView)}
          duration={1}
          start={{
            transform: 'translateX(-400px)',
          }}
          end={{
            transform: 'translateY(0)',
          }}>
          <div className={styles.img}></div>
        </Animate>
        <div>
          <Animate
            play={Boolean(isInView)}
            duration={1}
            start={{
              opacity: '0',
              transform: 'translateY(-400px)',
            }}
            end={{
              opacity: '1',
              transform: 'translateY(0)',
            }}>
            <div className={styles.anm_2}>
              <div>
                <TitleSection title={'Mission'} />
              </div>
              <div className={styles.content}>
                At Open Factor Foundation, our mission is to promote efficiency and innovation in Vietnam's industries and sectors by empowering young people to create impactful and inclusive AI solutions. Through our comprehensive guidance and best practices, we aim to provide the tools and knowledge necessary for the next generation of AI leaders to make a positive impact on the country's future. By fostering creativity and innovation, and by adapting AI solutions to the unique needs of Vietnam's market, we can drive sustainable growth and help build a more prosperous and inclusive society for all.
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default Mission;
