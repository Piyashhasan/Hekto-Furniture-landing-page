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
          className={`filter-button ${btnActive === "all" ? "active" : null}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterProducts("newArrival")}
          className={`filter-button ${
            btnActive === "newArrival" ? "active" : null
          }`}
        >
          New Arrival
        </button>
        <button
          onClick={() => handleFilterProducts("bestSeller")}
          className={`filter-button ${
            btnActive === "bestSeller" ? "active" : null
          }`}
        >
          Best Seller
        </button>
        <button
          onClick={() => handleFilterProducts("featured")}
          className={`filter-button ${
            btnActive === "featured" ? "active" : null
          }`}
        >
          Featured
        </button>
        <button
          onClick={() => handleFilterProducts("specialOffer")}
          className={`filter-button ${
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
