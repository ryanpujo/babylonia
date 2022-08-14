import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { HomepageProps } from '../../pages/homepage';

const CarouselHomepage = ({ data }: HomepageProps) => {
  const navs = [
    'Apparel',
    'Gadget',
    'Fitness',
    'Sports',
    'Arts',
    'Vehicle',
    'Machinary',
  ];
  return (
    <div>
      <div className="mt-10 flex justify-between bg-white p-4">
        <div className="space-y-2 hidden md:hidden lg:block">
          <h3>My preffered markets</h3>
          <ul className="space-y-2">
            {navs.map((nav) => (
              <li className="cursor-pointer hover:text-blue-500" key={nav}>
                {nav}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:max-w-5xl">
          <Carousel
            interval={5000}
            infiniteLoop
            autoPlay
            showThumbs={false}
            showStatus={false}
          >
            {data
              .filter((value) => value.rating > 4.7)
              .map((product) => (
                <div key={product.id}>
                  <Image
                    className="object-contain"
                    src={product.thumbnail}
                    width={1000}
                    height={288}
                    alt="image"
                  />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselHomepage;
