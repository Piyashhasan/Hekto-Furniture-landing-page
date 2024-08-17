import { shopexCardItems } from "../../../utils/shopexCardItems";

const ShopexOffer = () => {
  return (
    <section className="wrapper">
      <div className="py-[90px] px-[10px] xl:px-0">
        <h2 className="text-[32px] text-[#1A0B5B] text-center font-bold leading-[38px] sm:text-[36px] md:text-[40px]">
          What Shopex Offer!
        </h2>

        {/* offer card start */}
        <div className="mt-[50px] grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-8">
          {shopexCardItems.map((service, index) => {
            return (
              <div
                key={index}
                className="w-full h-full py-12 px-5 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]"
              >
                <div className="flex justify-center">
                  <img
                    className="w-[70px] object-contain object-center"
                    src={service.img}
                    alt={service.title}
                  />
                </div>
                <div className="text-center">
                  <h3 className="my-8 text-[20px] font-bold text-[#1A0B5B] leading-6">
                    {service.title}
                  </h3>
                  <p className="text-[#BAB6CE] font-semibold">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* offer card start */}
      </div>
    </section>
  );
};

export default ShopexOffer;
