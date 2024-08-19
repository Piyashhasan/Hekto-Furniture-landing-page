import nav_logo from "../../../assets/image/nav-logo.png";
import { IoSearch } from "react-icons/io5";
import MobileNav from "../../../reusable/MobileNav/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const MainNav = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white py-4 text-[#0d0e43] shadow-sm">
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="w-[1000px] flex items-center justify-between px-[10px] lg:px-0">
            <div>
              <img src={nav_logo} alt="Brand Logo" />
            </div>
            <div className="hidden lg:block">
              <ul className="flex flex-row items-center gap-5">
                <li className="hover:text-[#FB2E86]">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <a href="#featured-products">Feature</a>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <a href="#latest-products">Latest</a>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <a href="#offers">Offers</a>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <a href="#unique">Unique</a>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <a href="#trending">Trending</a>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <a href="#footer">Contact</a>
                </li>
              </ul>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <input
                className="outline-none border px-5 h-[35px]"
                type="text"
                name="search"
              />
              <div className=" w-[35px] h-[35px] flex items-center justify-center bg-[#FB2E86] cursor-pointer hover:bg-[#e74089]">
                <IoSearch className="text-xl text-white" />
              </div>
            </div>

            <div
              className="lg:hidden"
              onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
            >
              <GiHamburgerMenu className="text-3xl cursor-pointer text-[#0d0e43" />
            </div>
          </div>
        </div>
      </div>

      {/* --- toggle mobile menu start --- */}
      <MobileNav
        toggleMobileMenu={toggleMobileMenu}
        setToggleMobileMenu={setToggleMobileMenu}
      />
      {/* --- toggle mobile menu end --- */}
    </nav>
  );
};

export default MainNav;
