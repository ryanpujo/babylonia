import CarouselHomepage from './carousel';
import ProductHighlights from './product-hightlight';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../../types';
import Products from './products';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Layout from '../../components/layout';
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://dummyjson.com/products');
  const products: Product[] = res.data.products;
  return {
    props: {
      data: products,
    },
  };
};
export type HomepageProps = {
  data: Product[];
};
const Homepage = ({ data }: HomepageProps) => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <CarouselHomepage data={data} />
        <ProductHighlights />
        <Products data={data} />
      </div>
    </Layout>
  );
};

export default Homepage;
