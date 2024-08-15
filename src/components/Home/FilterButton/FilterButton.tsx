interface Props {
  btnActive: string;
  handleFilterProducts: (filterValue: string) => void;
}

const FilterButton = ({ btnActive, handleFilterProducts }: Props) => {
  return (
    <div className="my-14">
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[#1A0B5B] font-semibold">
        <button
          onClick={() => handleFilterProducts("all")}
          className={`py-1 border-b-2 border-white cursor-pointer lg:hover:border-b-2 lg:hover:border-[#FB2E86] lg:hover:text-[#FB2E86] ${
            btnActive === "all" ? "active" : null
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterProducts("newArrival")}
          className={`py-1 border-b-2 border-white cursor-pointer lg:hover:border-b-2 lg:hover:border-[#FB2E86] lg:hover:text-[#FB2E86] ${
            btnActive === "newArrival" ? "active" : null
          }`}
        >
          New Arrival
        </button>
        <button
          onClick={() => handleFilterProducts("bestSeller")}
          className={`py-1 border-b-2 border-white cursor-pointer lg:hover:border-b-2 lg:hover:border-[#FB2E86] lg:hover:text-[#FB2E86] ${
            btnActive === "bestSeller" ? "active" : null
          }`}
        >
          Best Seller
        </button>
        <button
          onClick={() => handleFilterProducts("featured")}
          className={`py-1 border-b-2 border-white cursor-pointer lg:hover:border-b-2 lg:hover:border-[#FB2E86] lg:hover:text-[#FB2E86] ${
            btnActive === "featured" ? "active" : null
          }`}
        >
          Featured
        </button>
        <button
          onClick={() => handleFilterProducts("specialOffer")}
          className={`py-1 border-b-2 border-white cursor-pointer lg:hover:border-b-2 lg:hover:border-[#FB2E86] lg:hover:text-[#FB2E86] ${
            btnActive === "specialOffer" ? "active" : null
          }`}
        >
          Special Offer
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
