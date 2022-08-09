import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Homepage from './homepage';

const Home: NextPage = () => {
  return (
    <div className="bg-backgroundApp h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
};

export default Home;
