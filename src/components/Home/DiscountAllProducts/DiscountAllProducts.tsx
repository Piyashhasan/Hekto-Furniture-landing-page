import { Link } from "react-router-dom";
import productOne from "../../../assets/image/trending-product/discount-one.png";
import productTwo from "../../../assets/image/trending-product/discount-two.png";
import trendMiniOne from "../../../assets/image/trending-product/trend-mini-one.png";
import trendMiniTwo from "../../../assets/image/trending-product/trend-mini-two.png";
import trendMiniThree from "../../../assets/image/trending-product/trend-mini-three.png";

const DiscountAllProducts = () => {
  return (
    <section className="wrapper">
      <div className="pt-[90px] px-[10px] xl:px-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full bg-[#FFF6FB] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <div className="px-5 py-8">
              <p className="mb-3 text-[22px] text-[#1A0B5B] font-semibold leading-6">
                23% off in all products
              </p>
              <Link
                className="text-[16px] text-[#FB2E86] font-bold underline"
                to="#"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <img
                className="max-w-[215px] object-contain object-center"
                src={productOne}
                alt="Product"
              />
            </div>
          </div>

          <div className="w-full bg-[#EEEFFB] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <div className="px-5 py-8">
              <p className="mb-3 text-[22px] text-[#1A0B5B] font-semibold leading-6">
                23% off in all products
              </p>
              <Link
                className="text-[16px] text-[#FB2E86] font-bold underline"
                to="#"
              >
                Shop Now
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <img
                className="md:max-w-[315px] object-contain object-center"
                src={productTwo}
                alt="Product"
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-y-5 justify-between">
            <div className="flex items-center gap-5">
              <div className="w-[107px] h-[75px] flex justify-center bg-[#F5F6F8] object-contain object-center">
                <img
                  className="max-w-full h-auto"
                  src={trendMiniOne}
                  alt="Trending product"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[#1A0B5B] text-[16px] font-bold leading-6">
                  Executive Seat chair
                </p>
                <del className="text-[#1A0B5B] text-[14px] font-bold leading-[21px]">
                  $32.00
                </del>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[107px] h-[75px] flex justify-center bg-[#F5F6F8] object-contain object-center">
                <img
                  className="max-w-full h-auto"
                  src={trendMiniTwo}
                  alt="Trending product"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[#1A0B5B] text-[16px] font-bold leading-6">
                  Executive Seat chair
                </p>
                <del className="text-[#1A0B5B] text-[14px] font-bold leading-[21px]">
                  $50.00
                </del>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-[107px] h-[75px] flex justify-center bg-[#F5F6F8] object-contain object-center">
                <img
                  className="max-w-full h-auto"
                  src={trendMiniThree}
                  alt="Trending Product"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-[#1A0B5B] text-[16px] font-bold leading-6">
                  Executive Seat chair
                </p>
                <del className="text-[#1A0B5B] text-[14px] font-bold leading-[21px]">
                  $25.00
                </del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountAllProducts;
