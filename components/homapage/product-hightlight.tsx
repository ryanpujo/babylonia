import Image from 'next/image';
import React from 'react';
import {
  highlights,
  highlightsIcon,
  HighlightIconType,
  HighlightsType,
} from '../../helpers/product-hightlight';

const ProductHighlights = () => {
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {Object.keys(highlights).map((title) => (
          <div className="bg-white p-4 space-y-2" key={title}>
            <div className="flex">
              {highlightsIcon[title as keyof HighlightIconType]}
              <h3>{title}</h3>
            </div>
            <div className="flex justify-around">
              {highlights[title as keyof HighlightsType].map((product) => (
                <div key={product.name} className="">
                  <Image
                    src={product.picture}
                    width={108}
                    height={110}
                    alt="product"
                  />
                  <div className="text-center">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;
