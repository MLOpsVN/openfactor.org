import TitleSection from '@/components/title_section';
import BrandCard from '@/components/brand_card';
import styles from './our_brands.module.scss';

const OurBrands = () => {
  return (
    <>
      <div className={styles.root} id="our-brands">
        <div className={styles.content_w}>
          <div className={styles.img}></div>
          <div className={styles.form}>
            <div>
              <TitleSection title={'Our brands'} />
            </div>
            <div className={styles.card}>
          {brands?.map?.((brand, index) => {
            return (
              <div className={styles.card_item} key={index}>
                <BrandCard {...brand} />
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
    img: '/foundation-MLOpsVN-chữ-trắng-08.png',
    title: "Open Factor Foundation",
    name: 'MLOpsVN',
    link: 'https://mlops.vn',
  },
  {
    img: '/foundation-AIHub.ML-chữ-trắng-08.png',
    title: "Open Factor Foundation",
    name: 'AIHub.ML',
    link: 'https://aihub.ml',
  },
  {
    img: '/foundation-Academy-chữ-trắng-08.png',
    title: "Open Factor Foundation",
    name: 'Academy',
    link: 'https://courses.aihub.ml',
  },
]
