import CarouselHomepage from './carousel';
import ProductHighlights from './product-hightlight';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../../types';
import Products from './products';

export type HighRatingProducts = {
  data: Product[];
};
const Homepage = ({ data }: HighRatingProducts) => {
  return (
    <div className="max-w-7xl mx-auto">
      <CarouselHomepage />
      <ProductHighlights />
      <Products data={data} />
    </div>
  );
};

export default Homepage;
