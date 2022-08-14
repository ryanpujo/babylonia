import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Rating } from '@mui/material';
import React from 'react';
import { Product } from '../../types';
export type ProductPageProp = {
  data: Product;
};
const ProductDetail = ({ data }: ProductPageProp) => {
  return (
    <div>
      <div className="mt-1 p-2 bg-white" id="product-detail">
        <h1 className="text-xl">{data.brand}</h1>
        <h1 className="text-xl">{data.title}</h1>
        {data.discountPercentage && (
          <h1 className="text-xl text-lightBlue">
            $
            {Math.round(
              data.price - data.price * (data.discountPercentage / 100)
            )}
          </h1>
        )}
        <h1
          className={`${
            data.discountPercentage > 0
              ? 'line-through decoration-double'
              : 'text-xl'
          }`}
        >
          ${data.price}
        </h1>
        <div className="flex">
          <Rating value={data.rating} size="small" />
          <p className="text-sm align-text-top">{data.rating}</p>
        </div>
      </div>
      <div className="mt-1 p-2 bg-white flex justify-between">
        <h1 className="text-xl">Category :</h1>
        <p>{data.category}</p>
      </div>
      <div className="mt-1 bg-white p-2">
        <h1 className="text-xl">Description</h1>
        <p>{data.description}</p>
      </div>
      <div className="bg-white mt-1 fixed lg:static bottom-0 right-0 left-0 w-full p-2 flex space-x-2">
        <div className="p-4 border-2 w-fit rounded-lg border-lightBlue">
          <ShoppingCartIcon className="h-5 text-lightBlue w-5" />
        </div>
        <div className="p-4 bg-lightBlue flex-grow border-2 w-fit rounded-lg border-lightBlue">
          <h1 className="text-center text-white">Buy now</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
