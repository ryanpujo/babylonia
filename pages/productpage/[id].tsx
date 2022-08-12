import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import { Product } from '../../types';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { productPageAction } from '../../store/product-page';
import { Rating } from '@mui/material';
import { ShoppingCartIcon } from '@heroicons/react/outline';
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('https://dummyjson.com/products');
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
type ProductPageProp = {
  data: Product;
};

const ProductPage = ({ data }: ProductPageProp) => {
  const dispatch = useDispatch();
  const picturePath = useSelector((state: RootState) => {
    if (state.productPage.imagePath === '') {
      return data.images[0];
    }
    return state.productPage.imagePath;
  });
  const changePicture = (image: string) =>
    dispatch(productPageAction.setImagePath(image));

  useEffect(() => {
    return () => {
      dispatch(productPageAction.setImagePath(''));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <div className="max-w-7xl min-h-screen mx-auto mt-5">
        <div className="min-h-screen p-2 lg:flex">
          <div id="product-images" className="bg-white">
            <Image
              className="object-contain w-full"
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
            <Rating value={data.rating} size="small" />
          </div>
          <div className="mt-1 p-2 bg-white flex justify-between">
            <h1 className="text-xl">Category :</h1>
            <p>{data.category}</p>
          </div>
          <div className="mt-1 bg-white p-2">
            <h1 className="text-xl">Description</h1>
            <p>{data.description}</p>
          </div>
          <div className="bg-white mt-1 fixed bottom-0 right-0 left-0 w-full p-2 flex space-x-2">
            <div className="p-4 border-2 w-fit rounded-lg border-lightBlue">
              <ShoppingCartIcon className="h-5 text-lightBlue w-5" />
            </div>
            <div className="p-4 bg-lightBlue flex-grow border-2 w-fit rounded-lg border-lightBlue">
              <h1 className="text-center text-white">Buy now</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
