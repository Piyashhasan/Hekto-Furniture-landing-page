import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";

const FeatureProducts = () => {
  return (
    <section className="wrapper">
      <div className="py-[90px]">
        <h2 className="text-[32px] text-[#1A0B5B] text-center font-bold leading-[38px] sm:text-[36px] md:text-[40px]">
          Featured Products
        </h2>
        {/* --- carousel section --- */}
        <div>
          <ProductsCarousel />
        </div>
        {/* --- carousel section --- */}
      </div>
    </section>
  );
};

export default FeatureProducts;
