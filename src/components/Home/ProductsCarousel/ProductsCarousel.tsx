import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import threeDot from "../../../assets/image/dotted-line.png";
import featureProducts from "../../../utils/featureProducts";

const ProductsCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {featureProducts.map((product, index) => {
          return (
            <div key={index} className="w-full h-full shadow-lg cursor-pointer">
              <div className="flex items-center justify-center bg-[#F6F7FB] py-4">
                <img
                  className="w-[160px] h-[150px] object-contain object-center p-2"
                  src={product.img}
                  alt="Chair"
                />
              </div>
              <div className="text-center pt-5 pb-7 bg-white">
                <p className="text-[20px] text-[#FB2E86] font-semibold leading-6">
                  {product.productName}
                </p>
                <div className="flex justify-center mt-[10px] mb-4">
                  <img src={threeDot} alt="dot line" />
                </div>
                <p className="text-[16px] text-[#151875] font-normal leading-6">
                  Code - {product.productCode}
                </p>
                <p className="text-[16px] text-[#151875] font-normal leading-6 mt-3">
                  ${product.price}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
