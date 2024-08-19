import ProductsCategoryFilter from "../ProductsCategoryFilter/ProductsCategoryFilter";

const LatestProducts = () => {
  return (
    <section id="latest-products" className="wrapper">
      <div className="latest-products py-[90px] px-[10px] xl:px-0">
        <h2 className="text-[32px] text-[#1A0B5B] text-center font-bold leading-[38px] sm:text-[36px] md:text-[40px]">
          Latest Products
        </h2>

        {/* --- products category filter --- */}
        <ProductsCategoryFilter />
        {/* --- product category filter --- */}
      </div>
    </section>
  );
};

export default LatestProducts;
