import { useState } from "react";
import { LatestProduct } from "../../../types/types";
import FilterButton from "../FilterButton/FilterButton";
import FilteredProducts from "../FilteredProducts/FilteredProducts";
import latestProducts from "../../../utils/latestProducts";

const ProductsCategoryFilter = () => {
  const [filterProducts, setFilterProducts] =
    useState<LatestProduct[]>(latestProducts);

  // --- category active handle state ---
  const [btnActive, setBtnActive] = useState<string>("all");

  //   --- product show animation handle state ---
  const [animationControlKey, setAnimationControlKey] = useState<number>(0);

  //   --- Product filter function ---
  const handleFilterProducts = (filterValue: string) => {
    setAnimationControlKey((prevKey) => prevKey + 1);

    if (filterValue === "all") {
      setFilterProducts(latestProducts);
      setBtnActive("all");
    } else {
      const filterProduct = latestProducts.filter((product) =>
        product.filterKey.includes(filterValue)
      );
      setFilterProducts(filterProduct);
      setBtnActive(filterValue);
    }
  };

  return (
    <section className="my-[50px]">
      {/* --- filter button start --- */}
      <FilterButton
        btnActive={btnActive}
        handleFilterProducts={handleFilterProducts}
      />
      {/* --- filter button end --- */}

      {/* --- filtered product start --- */}
      <FilteredProducts
        animationKey={animationControlKey}
        filterProducts={filterProducts}
      />
      {/* --- filtered product end --- */}
    </section>
  );
};

export default ProductsCategoryFilter;
