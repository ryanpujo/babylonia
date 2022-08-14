import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/homapage/product';
import Layout from '../../components/layout';
import { RootState } from '../../store';
import { Product } from '../../types';

const ErrorPage = () => {
  const products: Product[] = useSelector(
    (state: RootState) => state.products.products
  );
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
