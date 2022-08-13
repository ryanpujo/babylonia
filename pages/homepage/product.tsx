import { Rating } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Product } from '../../types';
type ProductCardProp = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProp) => {
  return (
    <div className="w-32 md:w-48 cursor-pointer group mx-auto opacity-90 shadow-gray-400 shadow-xl">
      <Link href={`/productpage/${product.id}`}>
        <a>
          <div className="bg-gray-400">
            <Image
              className="object-cover group-hover:opacity-75"
              src={product.thumbnail}
              width={200}
              height={200}
              alt="thumbnail"
            />
          </div>
          {/* detail card */}
          <div className="p-1">
            <div className="md:text-center truncate mx-auto md:w-40">
              <span className="text-xs md:text-sm">{product.title}</span>
            </div>
            {/* price */}
            <div className="flex pl-2 mb-2">
              <span
                className={`mr-2 decoration-double ${
                  product.discountPercentage > 0 ? 'line-through' : ''
                }`}
              >
                ${product.price}
              </span>
              <span
                className={`${
                  product.discountPercentage === 0 ? 'hidden' : ''
                }`}
              >
                $
                {Math.round(
                  product.price -
                    product.price * (product.discountPercentage / 100)
                )}
              </span>
            </div>
            <div className="">
              <Rating
                defaultValue={product.rating}
                readOnly
                size="small"
                className="my-auto"
                precision={0.5}
              />
              <span className="md:text-sm text-xs align-top ml-2">
                {product.rating}
              </span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
