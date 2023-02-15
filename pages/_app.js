import GA4React from 'ga-4-react';
import '../styles/globals.css';
import Layout from '@/core/layout';
import Head from 'next/head';

const ga4react = new GA4React('G-8SL70593HP');

function MyApp({ Component, pageProps }) {
  ga4react
    .initialize()
    .then((res) => console.log('Analytics Success'))
    .catch((err) => console.log('Analytics Failure'));
  return (
    <div>
      <Head>
        <title>Open Factor Foundation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
