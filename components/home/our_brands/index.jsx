import TitleSection from '@/components/title_section';
import BrandCard from '@/components/brand_card';
import styles from './our_brands.module.scss';

const OurBrands = () => {
  return (
    <>
      <div className={styles.root} id="our_brands">
        <div className={styles.content_w}>
          <div className={styles.img}></div>
          <div className={styles.form}>
            <div>
              <TitleSection title={'Our brands'} />
            </div>
            <div className={styles.card}>
          {brands?.map?.((founder, index) => {
            return (
              <div className={styles.card_item} key={index}>
                <BrandCard {...founder} />
              </div>
            );
          })}
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBrands;

const brands = [
  {
    img: '/Logo_k_chu.png',
    title: "Open Factor Foundation",
    name: 'MLOpsVN',
    link: 'https://mlops.vn',
  },
  {
    img: '/Logo_k_chu.png',
    title: "Open Factor Foundation",
    name: 'AIHub.ML',
    link: 'https://aihub.ml',
  },
  {
    img: '/Logo_k_chu.png',
    title: "Open Factor Foundation",
    name: 'Academy',
    link: 'https://courses.aihub.ml',
  },
]
