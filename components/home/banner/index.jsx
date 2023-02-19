import styles from './banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.root}>
      <div className={styles.filter}></div>
      <div className={styles.intro}>
        <div>Open Factor Foundation</div>
        <div>
          Empowering Youth to Innovate with AI for a Better Future
        </div>
        <div>
          <a href="#founders">About us</a>
        </div>
      </div>
      <div className={styles.img_bg}></div>
    </div>
  );
};

export default Banner;
