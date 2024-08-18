import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#EEEFFB]">
      <footer className="wrapper">
        <div className="py-[90px] px-[10px] xl:px-0">
          <div className="flex flex-wrap gap-x-5 gap-y-10 justify-between">
            <div className="w-full md:w-[350px] lg:w-auto">
              <h3 className="text-black text-[38px] font-semibold leading-[46px]">
                Hekto
              </h3>
              <div className="mt-[30px]">
                <div className="flex items-center">
                  <input
                    className="w-52 outline-none py-2 px-3"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                  <button className="bg-[#FB2E86] text-white text-[16px] leading-[24px] py-2 px-3">
                    Sign Up
                  </button>
                </div>
                <div className="text-[14px] text-[#B8BCD8] mt-[45px]">
                  <p>Contact Info</p>
                  <p className="mt-3">
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[350px] lg:w-auto">
              <h4 className="text-black text-[22px] font-bold leading-[33px]">
                Catagories
              </h4>
              <div className="mt-[30px]">
                <ul className="flex flex-col gap-y-5 text-[14px] text-[#B8BCD8]">
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Living Room
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Bedroom
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Dining Room
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Office
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Outdoor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-[350px] lg:w-auto">
              <h4 className="text-black text-[22px] font-bold leading-[33px]">
                Customer Care
              </h4>
              <div className="mt-[30px]">
                <ul className="flex flex-col gap-y-5 text-[14px] text-[#B8BCD8]">
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Discount
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Orders History
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-[350px] lg:w-auto">
              <h4 className="text-black text-[22px] font-bold leading-[33px]">
                Pages
              </h4>
              <div className="mt-[30px]">
                <ul className="flex flex-col gap-y-5 text-[14px] text-[#B8BCD8]">
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Browse the Shop
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Category
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      All Pages
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-pink-400" to="#">
                      Elements
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
