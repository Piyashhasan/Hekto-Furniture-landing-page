import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosCall, IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="w-full bg-[#7E33E0] text-white hidden md:block">
      <div className="wrapper">
        <div className="flex justify-center items-center">
          <div className="w-[1000px] flex flex-wrap justify-between items-center py-2 px-[10px] lg:px-0">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#FB2E86]">
                <FaRegEnvelope className="text-xl" />
                <span>mhhasanul@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#FB2E86]">
                <IoIosCall className="text-xl" />
                <span>(12345)67890</span>
              </div>
            </div>
            <div>
              <ul className="flex items-center gap-6">
                <li className="flex items-center cursor-pointer hover:text-[#FB2E86]">
                  English <IoMdArrowDropdown />
                </li>
                <li className="cursor-pointer hover:text-[#FB2E86]">
                  <div className="flex items-center">
                    USD <IoMdArrowDropdown />
                  </div>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Login</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Wishlist</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">
                    <FaCartShopping className="text-[25px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
