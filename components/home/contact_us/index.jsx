import ContactUsForm from '@/components/contact_us_form';
import TitleSection from '@/components/title_section';
import styles from './contact_us.module.scss';

const ContactUs = () => {
  return (
    <>
      <div className={styles.root} id="contact-us">
        <div className={styles.content_w}>
          <div className={styles.img}></div>
          <div className={styles.form}>
            <div>
              <TitleSection title={'Contact us'} />
            </div>
            <div className={styles.content}>
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
