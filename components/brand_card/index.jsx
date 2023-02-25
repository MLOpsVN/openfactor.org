import Image from 'next/image';
import Link from 'next/link';
import styles from './brand_card.module.scss';

const BrandCard = ({ img, name, link }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src={img} title={name} width={320} height={75} alt={name} />
      </div>
      <div className={styles.name}>
        <Link href={link} target={'_blank'}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
