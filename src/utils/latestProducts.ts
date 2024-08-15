import { LatestProduct } from "../types/types";
import productOne from "../assets/image/latest-product/latest-one.png";
import productTwo from "../assets/image/latest-product/latest-two.png";
import productThree from "../assets/image/latest-product/latest-three.png";
import productFour from "../assets/image/latest-product/latest-four.png";
import productFive from "../assets/image/latest-product/latest-five.png";
import productSix from "../assets/image/latest-product/latest-six.png";

const latestProducts: LatestProduct[] = [
  {
    img: productOne,
    productName: "Comfort Handy Craft",
    price: 65.0,
    discountPrice: 42.0,
    filterKey: ["specialOffer", "newArrival"],
  },
  {
    img: productTwo,
    productName: "Comfort Handy Craft",
    price: 80.0,
    discountPrice: 65.0,
    filterKey: ["bestSeller", "newArrival"],
  },
  {
    img: productThree,
    productName: "Comfort Handy Craft",
    price: 100.0,
    discountPrice: 85.0,
    filterKey: ["featured"],
  },
  {
    img: productFour,
    productName: "Comfort Handy Craft",
    price: 85.0,
    discountPrice: 70.0,
    filterKey: ["featured"],
  },
  {
    img: productFive,
    productName: "Comfort Handy Craft",
    price: 65.0,
    discountPrice: 50.0,
    filterKey: ["bestSeller"],
  },
  {
    img: productSix,
    productName: "Comfort Handy Craft",
    price: 42.0,
    discountPrice: 38.0,
    filterKey: ["featured", "bestSeller"],
  },
];

export default latestProducts;
