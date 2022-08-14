import { TrendingUpIcon } from '@heroicons/react/outline';
import React from 'react';
import Carousel from 'react-multi-carousel';
import { Product } from '../../types';
import ProductCard from './product';
type ProductsProp = {
  data: Product[];
};
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const Products = ({ data }: ProductsProp) => {
  return (
    <div className="my-4 bg-white p-4">
      <div className="flex mb-2">
        <TrendingUpIcon className="h-4 w-4 my-auto mr-2" />
        <h3>Best Rate</h3>
      </div>
      <Carousel autoPlay infinite className="mx-auto" responsive={responsive}>
        {data
          .filter((value) => value.rating > 4.7)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Carousel>
    </div>
  );
};

export default Products;
