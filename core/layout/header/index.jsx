import Image from 'next/image';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}></div>
      <div className={styles.nav}>
        {menu?.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              <div>{item.title}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const menu = [
  {
    title: 'Founders',
    path: '#founders',
  },
  {
    title: 'Our brands',
    path: '#our-brands',
  },
  {
    title: 'Contact us',
    path: '#contact-us',
  },
];

export default Header;
