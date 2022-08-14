import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import { Product } from '../../types';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { productPageAction } from '../../store/product-page';
import ProductDetail, {
  ProductPageProp,
} from '../../components/productpage/ProductDetail';
import ProductImage from '../../components/productpage/ProductImage';
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://dummyjson.com/products?limit=100');
  const paths = res.data.products.map((product: Product) => {
    return {
      params: { id: `${product.id}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get(
    `https://dummyjson.com/products/${context.params?.id}`
  );
  const product: Product = res.data;
  return {
    props: { data: product },
  };
};

const ProductPage = ({ data }: ProductPageProp) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(productPageAction.setImagePath(''));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="max-w-7xl min-h-screen mx-auto mt-5">
        <div className="min-h-screen p-2">
          <ProductImage data={data} />
          <ProductDetail data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
