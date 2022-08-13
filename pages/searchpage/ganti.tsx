import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout';
import { RootState } from '../../store';
import { productsAction } from '../../store/products';
import { Product } from '../../types';
import ProductCard from '../homepage/product';
const SearchPage = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const products: Product[] = useSelector(
    (state: RootState) => state.products.products
  );
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`https://dummyjson.com/products/search?q=${route.query.name}`, {
        signal: controller.signal,
      })
      .then((res) => {
        dispatch(productsAction.setProducts(res.data.products));
      })
      .catch((err) => {
        if (err) {
        }
      });
    return () => {
      controller.abort();
    };
  });
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-4">
        <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
