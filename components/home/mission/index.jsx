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
                Efficiency: Help organizations design/build/implement better ML systems faster, by using MLOps best practices in the AI
                industry, delivered by highly qualified professionals.
                <br />
                <br />
                Societal Impacts: Contribute to the growth of AI community in Vietnam by having a strong human capital that supports
                successful digital transformation of the socio-economic systems in Viet Nam.
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default Mission;
