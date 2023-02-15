import { useState } from 'react';
import styles from './contact_us_form.module.scss';

const apiUrl = 'https://api.aihub.ml/v1/contact_us';

const ContactUsForm = () => {
  const [title, setTitle] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [content, setContent] = useState('');
  const [allowContact, setAllowContact] = useState(false);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onYourEmailChange = (e) => {
    setYourEmail(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const onAllowContactChange = (e) => {
    setAllowContact(!allowContact);
  };

  const onSubmit = () => {
    if (title === '') {
      alert('Title cannot be empty.');
      return;
    }
    if (yourEmail === '') {
      alert('Your email cannot be empty.');
      return;
    }
    if (content === '') {
      alert('Content cannot be empty.');
      return;
    }
    if (allowContact === false) {
      alert('We might need to contact you for further assistance.');
      return;
    }

    const body = JSON.stringify({ title: title, email: yourEmail, content: content });
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    })
      .then((res) => {
        alert('Thank you for contacting us.');
      })
      .catch((error) => {
        console.log(error);
        alert('Error! Please contact the organization.');
      });
  };

  return (
    <>
      <div className={styles.input}>
        <input placeholder="*Title" onChange={onTitleChange} />
      </div>
      <div className={styles.input}>
        <input placeholder="*Your email" onChange={onYourEmailChange} />
      </div>
      <div className={styles.textarea}>
        <textarea placeholder="*Content" onChange={onContentChange} />
      </div>
      <div className={styles.checkbox}>
        <label className={styles.container}>
          Allow us to contact you via your email
          <input type="checkbox" onChange={onAllowContactChange} />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.submit} onClick={onSubmit}>
        Submit
      </div>
    </>
  );
};

export default ContactUsForm;
