import "./mainNav.scss";
import nav_logo from "../../../assets/image/nav-logo.png";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import MobileNav from "../../../reusable/MobileNav/MobileNav";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const MainNav = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  return (
    <nav className="bg-white py-5 text-[#0d0e43]">
      <div className="wrapper">
        <div className="flex justify-center">
          <div className="w-[1000px] flex items-center justify-between px-[10px] lg:px-0">
            <div>
              <img src={nav_logo} alt="Brand Logo" />
            </div>
            <div className="hidden md:block">
              <ul className="flex flex-row items-center gap-5">
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Home</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Pages</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Products</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Blog</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Shop</Link>
                </li>
                <li className="hover:text-[#FB2E86]">
                  <Link to="#">Contact</Link>
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
              className="md:hidden"
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
