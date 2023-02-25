import Image from 'next/image';
import Link from 'next/link';
import styles from './brand_card.module.scss';

const BrandCard = ({ img, name, title, link }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src={img} title={name} width={160} height={80} alt={name} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.name}>
        <Link href={link} target={'_blank'}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
