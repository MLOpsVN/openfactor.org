import Image from 'next/image';
import styles from './founder_card.module.scss';

const FounderCard = ({ img, name, title, role, org }) => {
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image src={img} title={name} width={180} height={180} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.org}>{org}</div>
    </div>
  );
};

export default FounderCard;
