import Image from 'next/image';
import Link from 'next/link';
import styles from './brand_card.module.scss';

const BrandCard = ({ img, name, title, link }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Link href={link} target={'_blank'}>
          <Image src={img} title={name} width={320} height={320} alt={name} />
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
