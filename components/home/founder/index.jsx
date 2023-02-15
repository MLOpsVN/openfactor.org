import TitleSection from '@/components/title_section';
import FounderCard from '@/components/founder_card';
import styles from './founder.module.scss';

const Founder = () => {
  return (
    <div className={styles.root} id="founders">
      <div className={styles.content_w}>
        <div className={styles.title}>
          <TitleSection title={'Founders'} />
        </div>

        <div className={styles.card}>
          {founders?.map?.((founder, index) => {
            return (
              <div className={styles.card_item} key={index}>
                <FounderCard {...founder} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Founder;

const founders = [
  {
    img: '/founders/tung-dao.jpg',
    name: 'Tung Dao',
    title: 'Founder/Tech mentor',
    role: 'Senior ML Engineer',
    org: 'Shopee, Singapore',
  },
  {
    img: '/founders/quan-dang.jpeg',
    name: 'Quan Dang',
    title: 'Founder/Tech mentor',
    role: 'Expert ML Engineer',
    org: 'Maritime Bank, Vietnam',
  },
  {
    img: '/founders/xuan-son-vu.png',
    name: 'Xuan-Son Vu',
    title: 'Founder/Tech mentor',
    role: 'Senior Researcher',
    org: 'Umeå University, Sweden',
  },
  {
    img: '/founders/harry-nguyen.jpeg',
    name: 'Harry Nguyen',
    title: 'Founder/Tech mentor',
    role: 'Assistant Professor',
    org: 'UCC, Ireland',
  },
  {
    img: '/founders/long-pham.png',
    name: 'DR. Long Pham',
    title: 'Communication Mentor',
    role: 'Senior Researcher',
    org: 'Coordinator - AI4EU',
  },
];
