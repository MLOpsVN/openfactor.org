import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.filter}></div>
      <div className={styles.intro}>
        <div>Open Factor Foundation</div>
        <div>
        OPEN FACTOR FOUNDATION commits to enable Vietnamese youth to bring inclusive and effective AI solutions to industries and sectors. We empower the youth with systematic and practical best practices from global AI industry tailored for Vietnam market
        </div>
        <div>
          <a href="#vision">Follow Us</a>
        </div>
      </div>
      <div className={styles.img_bg}></div>
    </div>
  );
};

export default Banner;
