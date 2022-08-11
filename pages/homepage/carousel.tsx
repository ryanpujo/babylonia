import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselHomepage = () => {
  const navs = [
    'Apparel',
    'Gadget',
    'Fitness',
    'Sports',
    'Arts',
    'Vehicle',
    'Machinary',
  ];
  const images = [
    '/Abstract-PC-Wallpaper.jpg',
    '/Abstract-Wallpaper-4K-HD-Wallpaper-Free-download.jpg',
    '/1776254.jpg',
    '/981877.jpg',
    '/arch.png',
    '/vercel.svg',
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
          <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
            {images.map((image) => (
              <div key={image}>
                <Image
                  className="object-cover"
                  src={image}
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
