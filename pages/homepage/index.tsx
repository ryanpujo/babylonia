import CarouselHomepage from './carousel';
import ProductHighlights from './product-hightlight';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { Product } from '../../types';
import Image from 'next/image';
import { TrendingUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Rating } from '@mui/material';

export type HighRatingProducts = {
  data: Product[];
};
const Homepage = ({ data }: HighRatingProducts) => {
  const responsive = {
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
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <CarouselHomepage />
      <ProductHighlights />
      <div className="my-4 bg-white p-4">
        <div className="flex mb-2">
          <TrendingUpIcon className="h-4 w-4 my-auto mr-2" />
          <h3>Best Rate</h3>
        </div>
        <Carousel autoPlay infinite className="mx-auto" responsive={responsive}>
          {data
            .filter((value) => value.rating > 4.0)
            .map((product) => (
              <div
                key={product.id}
                className="w-48 cursor-pointer group opacity-90 shadow-gray-400 shadow-xl"
              >
                <Link href={`https://dummyjson.com/products/${product.id}`}>
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
                      <div className="text-center truncate mx-auto w-40">
                        <span className="text-sm">{product.title}</span>
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
                        <span className="text-sm align-top ml-2">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Homepage;
