import { LatestProduct } from "../../../types/types";

interface Props {
  filterProducts: LatestProduct[];
  animationKey: number;
}

const FilteredProducts = ({ filterProducts, animationKey }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 latest-products">
      {filterProducts.map((product, index) => {
        return (
          <div
            key={`${index} ${animationKey}`}
            className="w-full shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] fade-in"
          >
            <div className="bg-[#F6F7FB] flex items-center justify-center">
              <img
                className="w-[200px] h-[200px] object-contain object-center my-6"
                src={product.img}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between pt-5 px-1 bg-white">
              <p className="text-[#151875] font-semibold">
                {product.productName}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#151875] font-semibold">
                  ${product.discountPrice}
                </span>
                <span className="text-[#FB2448] font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilteredProducts;
