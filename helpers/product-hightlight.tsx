import {
  BookmarkIcon,
  CashIcon,
  ChartSquareBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TrendingUpIcon,
} from '@heroicons/react/outline';
export type ProductHighlightType = {
  name: string;
  price: number;
  picture: string;
};
export type HighlightsType = {
  'New Arrival': ProductHighlightType[];
  Trending: ProductHighlightType[];
  'Most Rate': ProductHighlightType[];
  'Best Sellers': ProductHighlightType[];
  'Top Rate': ProductHighlightType[];
  Discount: ProductHighlightType[];
};
export const highlights = {
  'New Arrival': [
    {
      name: 'product 1',
      price: 3000,
      picture: '/Abstract-PC-Wallpaper.jpg',
    },
    {
      name: 'product 2',
      price: 3000,
      picture: '/Abstract-Wallpaper-4K-HD-Wallpaper-Free-download.jpg',
    },
    {
      name: 'product 3',
      price: 3000,
      picture: '/1776254.jpg',
    },
  ],
  Trending: [
    {
      name: 'trending 1',
      price: 3000,
      picture: '/981877.jpg',
    },
    {
      name: 'trending 2',
      price: 3000,
      picture: '/arch.png',
    },
    {
      name: 'trending 3',
      price: 3000,
      picture: '/vercel.svg',
    },
  ],
  'Most Rate': [
    {
      name: 'top 1',
      price: 3000,
      picture: '/veyZ8Jl-arch-linux-wallpaper.jpg',
    },
    {
      name: 'top 2',
      price: 3000,
      picture: '/wallpaperflare.com_wallpaper (copy).jpg',
    },
    {
      name: 'top 3',
      price: 3000,
      picture: '/wallpaperflare.com_wallpaper (copy).jpg',
    },
  ],
  'Best Sellers': [
    {
      name: 'best 1',
      price: 3000,
      picture: '/veyZ8Jl-arch-linux-wallpaper.jpg',
    },
    {
      name: 'best 2',
      price: 3000,
      picture: '/wallpaperflare.com_wallpaper (copy).jpg',
    },
    {
      name: 'best 3',
      price: 3000,
      picture: '/wallpaperflare.com_wallpaper (copy).jpg',
    },
  ],
  'Top Rate': [
    {
      name: 'most 1',
      price: 3000,
      picture: '/981877.jpg',
    },
    {
      name: 'most 2',
      price: 3000,
      picture: '/arch.png',
    },
    {
      name: 'most 3',
      price: 3000,
      picture: '/vercel.svg',
    },
  ],
  Discount: [
    {
      name: 'discount 1',
      price: 3000,
      picture: '/Abstract-PC-Wallpaper.jpg',
    },
    {
      name: 'discount 2',
      price: 3000,
      picture: '/Abstract-Wallpaper-4K-HD-Wallpaper-Free-download.jpg',
    },
    {
      name: 'discount 3',
      price: 3000,
      picture: '/1776254.jpg',
    },
  ],
};
export type HighlightIconType = {
  'New Arrival': JSX.Element;
  Trending: JSX.Element;
  'Most Rate': JSX.Element;
  'Best Sellers': JSX.Element;
  Discount: JSX.Element;
  'Top Rate': JSX.Element;
};
export const highlightsIcon = {
  'New Arrival': <ClockIcon className="h-4 w-4 my-auto" />,
  Trending: <TrendingUpIcon className="h-4 w-4 my-auto" />,
  'Most Rate': <ChartSquareBarIcon className="h-4 w-4 my-auto" />,
  'Best Sellers': <CashIcon className="h-4 w-4 my-auto" />,
  Discount: <CurrencyDollarIcon className="h-4 w-4 my-auto" />,
  'Top Rate': <BookmarkIcon className="h-4 w-4 my-auto" />,
};
