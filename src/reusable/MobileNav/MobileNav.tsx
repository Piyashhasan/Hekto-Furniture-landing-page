import { ImCross } from "react-icons/im";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

interface Props {
  toggleMobileMenu: boolean;
  setToggleMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav = ({ toggleMobileMenu, setToggleMobileMenu }: Props) => {
  return (
    <div className={`overly-effect ${toggleMobileMenu ? "open" : "close"}`}>
      <div
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
        className="flex justify-end"
      >
        <ImCross className="text-2xl cursor-pointer text-[#0d0e43] mr-[13px] mt-[-1px]" />
      </div>
      <div>
        <ul className="flex flex-col items-center gap-5 py-10 text-[#0d0e43] text-xl font-semibold h-full">
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#banner">Home</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#featured-products">Feature</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#latest-products">Latest</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#offers">Offers</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#unique">Unique</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#trending">Trending</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <a href="#footer">Contact</a>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <div className="flex items-center justify-center gap-2">
              <FaRegEnvelope className="text-xl" />
              <span>mhhasanul@gmail.com</span>
            </div>
          </li>
          <li onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <div className="flex items-center justify-center gap-2">
              <IoIosCall className="text-xl" />
              <span>(12345)67890</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
