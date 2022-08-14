import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productPageAction } from '../../store/product-page';
import { ProductPageProp } from './[id]';

const ProductImage = ({ data }: ProductPageProp) => {
  const dispatch = useDispatch();
  const picturePath = useSelector((state: RootState) => {
    if (state.productPage.imagePath === '') {
      return data.images[0];
    }
    return state.productPage.imagePath;
  });
  const changePicture = (image: string) =>
    dispatch(productPageAction.setImagePath(image));
  return (
    <div>
      <div id="product-images" className="bg-white">
        <Image
          className="object-contain h-24 w-full"
          src={picturePath}
          width={200}
          height={100}
          layout="responsive"
          alt="image"
        />
        <div className="flex justify-center">
          {data.images.map((image) => (
            <div
              className={`cursor-pointer w-12 mr-2 hover:border-lightBlue border-2 ${
                image === picturePath ? 'border-lightBlue border-2' : ''
              }`}
              onClick={() => changePicture(image)}
              key={image}
            >
              <Image
                className="object-contain"
                src={image}
                width={50}
                height={50}
                alt="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
