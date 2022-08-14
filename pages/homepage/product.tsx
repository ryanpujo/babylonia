import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Product } from '../../types';
import DetailCard from './DetailCard';
export type ProductCardProp = {
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
          <DetailCard product={product} />
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
