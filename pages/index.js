import Banner from '@/components/home/banner';
import Founder from '@/components/home/founder';
import ContactUsForm from '@/components/home/contact_us';
import styles from '../styles/Home.module.scss';
import Line from '@/components/line';

const Home = () => {
  const randomWidth = () => {
    return Math.random() * (80 - 40) + 40;
  };
  return (
    <div className={styles.root}>
      <Banner />
      <Founder />
      <Line direction={'right'} width={randomWidth()} />
      <ContactUsForm />
    </div>
  );
};

export default Home;
