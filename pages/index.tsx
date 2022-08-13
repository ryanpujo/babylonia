import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import { Product } from '../types';
import Homepage, { HighRatingProducts } from './homepage';

const Home: NextPage<HighRatingProducts> = ({ data }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
