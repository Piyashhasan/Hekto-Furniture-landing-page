import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";

const FeatureProducts = () => {
  return (
    <section className="wrapper">
      <div className="py-[90px] px-[10px] lg:px-0">
        <h2 className="text-[32px] text-[#1A0B5B] text-center font-bold leading-[38px] sm:text-[36px] md:text-[40px]">
          Featured Products
        </h2>

        {/* --- carousel section --- */}
        <ProductsCarousel />
        {/* --- carousel section --- */}
      </div>
    </section>
  );
};

export default FeatureProducts;
