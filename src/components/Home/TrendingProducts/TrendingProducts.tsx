import trendingProducts from "../../../utils/trendingProducts";
import DiscountAllProducts from "../DiscountAllProducts/DiscountAllProducts";

const TrendingProducts = () => {
  return (
    <section className="wrapper">
      <div className="py-[90px] px-[10px] xl:px-0">
        <h2 className="text-[32px] text-[#1A0B5B] text-center font-bold leading-[38px] sm:text-[36px] md:text-[40px]">
          Trending Products
        </h2>

        {/* Trending Products card start */}
        <div className="grid grid-cols-1 gap-5 my-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {trendingProducts.map((product, index) => {
            return (
              <div
                key={index}
                className="w-full bg-white p-5 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]"
              >
                <div className="bg-[#F6F7FB] flex items-center justify-center">
                  <img
                    className="max-w-[180px] mt-[20px] mb-[30px] object-contain object-center"
                    src={product.img}
                    alt={product.productName}
                  />
                </div>
                <div className="text-center my-6">
                  <p className="text-[20px] text-[#1A0B5B] font-semibold leading-6">
                    {product.productName}
                  </p>
                  <div className="flex items-center justify-center gap-x-5 mt-2">
                    <span className="text-[14px] text-[#1A0B5B] font-bold">
                      ${product.discountPrice}
                    </span>
                    <del className="text-[14px] text-[#B9BAD6] font-bold">
                      ${product.price}
                    </del>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Trending Products card end */}

        {/* Discount all products start */}
        <DiscountAllProducts />
        {/* Discount all products start */}
      </div>
    </section>
  );
};

export default TrendingProducts;
