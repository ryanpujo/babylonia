import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import { Product } from '../types';
import Homepage, { HighRatingProducts } from './homepage';
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://dummyjson.com/products');
  const highRatingProducts: Product[] = res.data.products;
  return {
    props: {
      data: highRatingProducts,
    },
  };
};
const Home: NextPage<HighRatingProducts> = ({ data }) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Homepage data={data} />
      </Layout>
    </div>
  );
};

export default Home;
