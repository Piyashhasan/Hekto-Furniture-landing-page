import uniqueFeatureImg from "../../../assets/image/unique-feture-img.png";

const UniqueFeature = () => {
  return (
    <section id="unique" className="bg-[#F1F0FF]">
      <div className="wrapper">
        <div className="py-[90px] px-[10px] xl:px-0">
          <div className="grid grid-cols-1 gap-3 items-center lg:grid-cols-2">
            {/* left side start */}
            <div className="w-full flex items-center justify-center lg:justify-end">
              <img
                className="md:max-w-[390px] lg:max-w-full object-contain object-center"
                src={uniqueFeatureImg}
                alt="Sofa image"
              />
            </div>
            {/* left side end */}

            {/* right side start */}
            <div className="w-full">
              <h2 className="text-[32px] text-[#1A0B5B] font-bold sm:leading-[55px] sm:text-[36px] md:text-[40px]">
                Unique Features Of leatest & Trending Poducts
              </h2>
              <ul className="my-8 px-[20px] flex flex-col gap-y-2 list-disc lg:my-12 ">
                <li className="marker:text-[#FB2E86] marker:text-[20px]">
                  All frames constructed with hardwood solids and laminates
                </li>
                <li className="marker:text-[#2B2BF5] marker:text-[20px]">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </li>
                <li className="marker:text-[#2BF5CC] marker:text-[20px]">
                  Arms, backs and seats are structurally reinforced
                </li>
              </ul>
              <div className="flex items-center gap-5">
                <button className="bg-[#FB2E86] text-[17px] text-white leading-6 px-6 py-3 rounded-[1px] border-[1px] border-[#FB2E86] hover:bg-white hover:text-[#FB2E86] hover:border-[1px] hover:border-pink-600">
                  Add To Cart
                </button>
                <div className="flex flex-col gap-1">
                  <p className="mt-[5px] text-[18px] text-[#1A0B5B] font-semibold leading-6">
                    B&B Italian Sofa
                  </p>
                  <span className="text-[#1A0B5B] text-[14px] font-semibold leading-[21px]">
                    $32.00
                  </span>
                </div>
              </div>
            </div>
            {/* right side start */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;
