import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const BottomFooter = () => {
  return (
    <section className="bg-[#E7E4F8]">
      <footer className="wrapper">
        <div className="flex flex-col gap-5 sm:flex-row items-center justify-between py-[20px] px-[10px] xl:px-0">
          <div>
            <p className="text-pink-600">©Webecy - All Rights Reserved</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[30px] h-[30px] text-white bg-[#151875] rounded-full flex items-center justify-center cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-[30px] h-[30px] text-white bg-[#151875] rounded-full flex items-center justify-center cursor-pointer">
              <AiFillInstagram />
            </div>
            <div className="w-[30px] h-[30px] text-white bg-[#151875] rounded-full flex items-center justify-center cursor-pointer">
              <FaXTwitter />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BottomFooter;
