import CarouselHomepage from '../../components/homapage/carousel';
import ProductHighlights from '../../components/homapage/product-hightlight';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../../types';
import axios from 'axios';
import { GetStaticProps } from 'next';
import Layout from '../../components/layout';
import Products from '../../components/homapage/products';
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('https://dummyjson.com/products?limit=100');
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
