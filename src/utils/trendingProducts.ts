import { TrendingProduct } from "../types/types";
import trendingProductOne from "../assets/image/trending-product/trending-product-one.png";
import trendingProductTwo from "../assets/image/trending-product/trending-product-two.png";
import trendingProductThree from "../assets/image/trending-product/trending-product-three.png";
import trendingProductFour from "../assets/image/trending-product/trending-product-four.png";

const trendingProducts: TrendingProduct[] = [
  {
    img: trendingProductOne,
    productName: "Chester Field Chair",
    price: 42.0,
    discountPrice: 35.0,
  },
  {
    img: trendingProductTwo,
    productName: "Cantilever chair",
    price: 80.0,
    discountPrice: 75.0,
  },
  {
    img: trendingProductThree,
    productName: "Wicker Chair",
    price: 26.0,
    discountPrice: 20.0,
  },
  {
    img: trendingProductFour,
    productName: "Wicker Chair",
    price: 42.0,
    discountPrice: 30.0,
  },
];

export default trendingProducts;
